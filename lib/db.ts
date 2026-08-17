import { Pool, types } from "pg";
import { hashPassword } from "./password";
import {
  DEFAULT_VALIDITY_MS,
  PublicUser,
  Role,
  StoredUser,
} from "./usersStore";

// int8 (BIGINT) время в мс читаем как number.
types.setTypeParser(20, (v: string) => parseInt(v, 10));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "false" ? false : { rejectUnauthorized: false },
  max: 5,
});

let initPromise: Promise<void> | null = null;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  username       TEXT PRIMARY KEY,
  password_hash  TEXT NOT NULL,
  role           TEXT NOT NULL CHECK (role IN ('student','teacher')),
  created_at     BIGINT NOT NULL,
  expires_at     BIGINT,
  session_version INT NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS sessions (
  token           TEXT PRIMARY KEY,
  username        TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
  session_version INT NOT NULL,
  created_at      BIGINT NOT NULL,
  expires_at      BIGINT NOT NULL
);
`;

interface SeedUser {
  username: string;
  password: string;
  role: Role;
  validityMs: number | null;
}

function seedMeta(): SeedUser[] {
  return [
    { username: "teacher1", password: "admin", role: "teacher", validityMs: null },
    { username: "student1", password: "1234", role: "student", validityMs: DEFAULT_VALIDITY_MS },
    { username: "svetlana", password: "12345", role: "student", validityMs: DEFAULT_VALIDITY_MS },
  ];
}

async function runInit(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is not set. Create a free Postgres DB (Neon/Supabase) and add DATABASE_URL to .env.local"
    );
  }
  await pool.query(SCHEMA);

  const { rowCount } = await pool.query("SELECT 1 FROM users LIMIT 1");
  if ((rowCount ?? 0) > 0) return;

  const now = Date.now();
  for (const s of seedMeta()) {
    const passwordHash = await hashPassword(s.password);
    await pool.query(
      `INSERT INTO users (username, password_hash, role, created_at, expires_at, session_version)
       VALUES ($1, $2, $3, $4, $5, 1)`,
      [
        s.username,
        passwordHash,
        s.role,
        now,
        s.validityMs === null ? null : now + s.validityMs,
      ]
    );
  }
}

function ensureInit(): Promise<void> {
  if (!initPromise) initPromise = runInit();
  return initPromise;
}

function toStoredUser(row: Record<string, unknown>): StoredUser {
  return {
    username: row.username as string,
    passwordHash: row.password_hash as string,
    role: row.role as Role,
    createdAt: row.created_at as number,
    expiresAt: row.expires_at === null ? null : (row.expires_at as number),
    sessionVersion: row.session_version as number,
  };
}

function toPublicUser(user: StoredUser): PublicUser {
  const { passwordHash: _passwordHash, ...publicUser } = user;
  return publicUser;
}

async function findUserByUsername(username: string): Promise<StoredUser | null> {
  await ensureInit();
  const res = await pool.query(
    "SELECT * FROM users WHERE lower(username) = lower($1)",
    [username.trim()]
  );
  if (res.rowCount === 0 || !res.rows[0]) return null;
  return toStoredUser(res.rows[0] as Record<string, unknown>);
}

// ---- Public user helpers -----------------------------------------------------

export async function listUsers(): Promise<PublicUser[]> {
  await ensureInit();
  const res = await pool.query(
    "SELECT * FROM users ORDER BY created_at ASC, username ASC"
  );
  return (res.rows as Record<string, unknown>[]).map((r) =>
    toPublicUser(toStoredUser(r))
  );
}

export async function getUserForAuth(
  username: string
): Promise<StoredUser | null> {
  return findUserByUsername(username);
}

export interface CreateUserResult {
  ok: boolean;
  error?: string;
  user?: PublicUser;
}

export async function createUser(input: {
  username: string;
  password: string;
  role: Role;
  validityDays?: number;
}): Promise<CreateUserResult> {
  await ensureInit();

  if (!input.username.trim()) {
    return { ok: false, error: "Введите логин" };
  }
  if (!input.password) {
    return { ok: false, error: "Введите пароль" };
  }
  const exists = await findUserByUsername(input.username);
  if (exists) {
    return { ok: false, error: "Пользователь с таким логином уже существует" };
  }

  const now = Date.now();
  const expiresAt =
    input.role === "teacher" || !input.validityDays
      ? null
      : now + input.validityDays * 24 * 60 * 60 * 1000;
  const passwordHash = await hashPassword(input.password);

  const row: StoredUser = {
    username: input.username.trim(),
    passwordHash,
    role: input.role,
    createdAt: now,
    expiresAt,
    sessionVersion: 1,
  };

  await pool.query(
    `INSERT INTO users (username, password_hash, role, created_at, expires_at, session_version)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      row.username,
      row.passwordHash,
      row.role,
      row.createdAt,
      row.expiresAt,
      row.sessionVersion,
    ]
  );

  return { ok: true, user: toPublicUser(row) };
}

export interface UpdateUserResult {
  ok: boolean;
  error?: string;
  user?: PublicUser;
}

export async function updateUserCredentials(
  username: string,
  patch: { username?: string; password?: string }
): Promise<UpdateUserResult> {
  await ensureInit();

  const user = await findUserByUsername(username);
  if (!user) return { ok: false, error: "Пользователь не найден" };

  let newName = user.username;
  let newHash = user.passwordHash;
  let changed = false;

  if (patch.username) {
    newName = patch.username.trim();
    if (!newName) return { ok: false, error: "Логин не может быть пустым" };
    if (newName.toLowerCase() !== user.username.toLowerCase()) {
      const collision = await findUserByUsername(newName);
      if (collision) return { ok: false, error: "Этот логин уже занят" };
      changed = true;
    }
  }

  if (patch.password) {
    if (!patch.password) return { ok: false, error: "Пароль не может быть пустым" };
    newHash = await hashPassword(patch.password);
    changed = true;
  }

  if (!changed) return { ok: true, user: toPublicUser(user) };

  // Любое изменение кредов инвалидирует активные сессии пользователя.
  const sessionVersion = user.sessionVersion + 1;

  await pool.query(
    `UPDATE users SET username = $1, password_hash = $2, session_version = $3
     WHERE lower(username) = lower($4)`,
    [newName, newHash, sessionVersion, username]
  );
  await pool.query("DELETE FROM sessions WHERE username = $1", [newName]);

  return {
    ok: true,
    user: toPublicUser({ ...user, username: newName, sessionVersion }),
  };
}

export interface RenewUserResult {
  ok: boolean;
  error?: string;
}

export async function renewUser(
  username: string,
  validityDays: number
): Promise<RenewUserResult> {
  await ensureInit();
  if (!validityDays || validityDays <= 0) {
    return { ok: false, error: "Количество дней должно быть положительным" };
  }
  const res = await pool.query(
    `UPDATE users
     SET expires_at = $1
     WHERE lower(username) = lower($2)`,
    [Date.now() + validityDays * 24 * 60 * 60 * 1000, username]
  );
  return { ok: res.rowCount !== 0 };
}

export async function deleteUser(username: string): Promise<boolean> {
  await ensureInit();
  const res = await pool.query("DELETE FROM users WHERE lower(username) = lower($1)", [
    username,
  ]);
  return res.rowCount !== 0;
}

// ---- Sessions -----------------------------------------------------------------

export interface SessionUser {
  username: string;
  role: Role;
}

export async function createSession(opts: {
  token: string;
  user: StoredUser;
}): Promise<void> {
  await ensureInit();
  await pool.query(
    `INSERT INTO sessions (token, username, session_version, created_at, expires_at)
     VALUES ($1, $2, $3, $4, $5)`,
    [opts.token, opts.user.username, opts.user.sessionVersion, Date.now(), opts.user.expiresAt ?? Date.now() + DEFAULT_VALIDITY_MS]
  );
}

/** Возвращает пользователя по валидному токену сессии или null. */
export async function getUserBySessionToken(
  token: string
): Promise<SessionUser | null> {
  await ensureInit();
  const res = await pool.query(
    `SELECT u.username, u.role, u.expires_at AS user_expires_at, u.session_version AS user_session_version,
            s.session_version AS session_version, s.expires_at AS session_expires_at
     FROM sessions s
     JOIN users u ON u.username = s.username
     WHERE s.token = $1`,
    [token]
  );

  const row = res.rows[0] as
    | {
        username: string;
        role: Role;
        user_expires_at: number | null;
        user_session_version: number;
        session_version: number;
        session_expires_at: number;
      }
    | undefined;

  if (!row) return null;

  const now = Date.now();
  const sessionStale =
    now > row.session_expires_at ||
    (row.user_expires_at !== null && now > row.user_expires_at) ||
    row.session_version !== row.user_session_version;

  if (sessionStale) {
    await pool.query("DELETE FROM sessions WHERE token = $1", [token]);
    return null;
  }

  return { username: row.username, role: row.role };
}

export async function deleteSession(token: string): Promise<void> {
  await ensureInit();
  await pool.query("DELETE FROM sessions WHERE token = $1", [token]);
}