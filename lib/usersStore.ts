export type Role = "student" | "teacher";

export interface StoredUser {
  username: string;
  passwordHash: string;
  role: Role;
  createdAt: number;
  expiresAt: number | null;
  sessionVersion: number;
}

export const STORAGE_USERS_KEY = "subjuntivo-users";
export const DEFAULT_VALIDITY_MS = 30 * 24 * 60 * 60 * 1000;
export const DEFAULT_VALIDITY_DAYS = 30;

const PEPPER = "subjuntivo-landing::v2";

export async function hashPassword(
  username: string,
  password: string
): Promise<string> {
  const data = new TextEncoder().encode(
    `${PEPPER}::${username.trim().toLowerCase()}::${password}`
  );
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

interface SeedUser {
  username: string;
  password: string;
  role: Role;
  validityMs: number | null;
}

function seedMeta(): SeedUser[] {
  return [
    {
      username: "teacher1",
      password: "admin",
      role: "teacher",
      validityMs: null,
    },
    {
      username: "student1",
      password: "1234",
      role: "student",
      validityMs: DEFAULT_VALIDITY_MS,
    },
    {
      username: "svetlana",
      password: "12345",
      role: "student",
      validityMs: DEFAULT_VALIDITY_MS,
    },
  ];
}

async function seed(): Promise<StoredUser[]> {
  const now = Date.now();
  return Promise.all(
    seedMeta().map(async (s) => ({
      username: s.username,
      passwordHash: await hashPassword(s.username, s.password),
      role: s.role,
      createdAt: now,
      expiresAt: s.validityMs === null ? null : now + s.validityMs,
      sessionVersion: 1,
    }))
  );
}

type LegacyUser = Partial<StoredUser> & { password?: string };

export async function ensureSeeded(): Promise<void> {
  if (typeof window === "undefined") return;
  const raw = localStorage.getItem(STORAGE_USERS_KEY);
  let legacy: LegacyUser[] = [];
  if (raw) {
    try {
      legacy = JSON.parse(raw) as LegacyUser[];
    } catch {
      legacy = [];
    }
  }

  const byName = new Map<string, StoredUser>();
  let changed = legacy.length === 0;

  for (const u of legacy) {
    const name = u.username;
    if (!name) continue;
    const key = name.toLowerCase();
    if (byName.has(key)) continue;

    if (u.passwordHash && u.role && u.createdAt) {
      byName.set(key, u as StoredUser);
    } else if (u.password) {
      byName.set(key, {
        username: name,
        passwordHash: await hashPassword(name, u.password),
        role: u.role ?? "student",
        createdAt: u.createdAt ?? Date.now(),
        expiresAt: u.expiresAt ?? null,
        sessionVersion: u.sessionVersion ?? 1,
      });
      changed = true;
    }
  }

  for (const seededUser of await seed()) {
    const key = seededUser.username.toLowerCase();
    if (!byName.has(key)) {
      byName.set(key, seededUser);
      changed = true;
    }
  }

  if (changed) {
    localStorage.setItem(
      STORAGE_USERS_KEY,
      JSON.stringify(Array.from(byName.values()))
    );
  }
}

export function getUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_USERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]): void {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

export function findUser(username: string): StoredUser | undefined {
  return getUsers().find(
    (u) => u.username.toLowerCase() === username.trim().toLowerCase()
  );
}

export function isExpired(user: StoredUser): boolean {
  return user.expiresAt !== null && Date.now() > user.expiresAt;
}

export interface CreateUserInput {
  username: string;
  password: string;
  role: Role;
  validityDays?: number;
}

export async function createUser(
  input: CreateUserInput
): Promise<{ ok: true } | { ok: false; error: string }> {
  const users = getUsers();
  if (
    users.some(
      (u) => u.username.toLowerCase() === input.username.toLowerCase()
    )
  ) {
    return { ok: false, error: "Пользователь с таким логином уже существует" };
  }
  const now = Date.now();
  const expiresAt =
    input.role === "teacher" || !input.validityDays
      ? null
      : now + input.validityDays * 24 * 60 * 60 * 1000;
  users.push({
    username: input.username,
    passwordHash: await hashPassword(input.username, input.password),
    role: input.role,
    createdAt: now,
    expiresAt,
    sessionVersion: 1,
  });
  saveUsers(users);
  return { ok: true };
}

export async function updateUser(
  username: string,
  patch: { username?: string; password?: string }
): Promise<{ ok: true } | { ok: false; error: string }> {
  const users = getUsers();
  const idx = users.findIndex(
    (u) => u.username.toLowerCase() === username.trim().toLowerCase()
  );
  if (idx === -1) return { ok: false, error: "Пользователь не найден" };

  const user = users[idx];

  if (patch.username) {
    const newName = patch.username.trim();
    if (
      users.some(
        (u, i) => i !== idx && u.username.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return { ok: false, error: "Этот логин уже занят" };
    }
    user.username = newName;
  }

  if (patch.password) {
    user.passwordHash = await hashPassword(user.username, patch.password);
  }

  // Любое изменение кредов инвалидирует активные сессии пользователя.
  if (patch.username || patch.password) {
    user.sessionVersion += 1;
  }

  saveUsers(users);
  return { ok: true };
}

export function renewUser(
  username: string,
  validityDays: number
): { ok: true } | { ok: false; error: string } {
  const users = getUsers();
  const idx = users.findIndex(
    (u) => u.username.toLowerCase() === username.trim().toLowerCase()
  );
  if (idx === -1) return { ok: false, error: "Пользователь не найден" };
  users[idx].expiresAt = Date.now() + validityDays * 24 * 60 * 60 * 1000;
  saveUsers(users);
  return { ok: true };
}

export function deleteUser(username: string): void {
  const users = getUsers();
  saveUsers(
    users.filter(
      (u) => u.username.toLowerCase() !== username.trim().toLowerCase()
    )
  );
}

export function formatExpiry(expiresAt: number | null): string {
  if (expiresAt === null) return "Бессрочно";
  return new Date(expiresAt).toLocaleString("ru-RU");
}