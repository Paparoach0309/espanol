"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  ensureSeeded,
  findUser,
  hashPassword,
  isExpired,
  STORAGE_USERS_KEY,
  StoredUser,
} from "../lib/usersStore";

type Role = "student" | "teacher";

interface User {
  username: string;
  role: Role;
}

interface Session {
  version: string;
  username: string;
  role: Role;
  sessionVersion: number;
  expiresAt: number | null;
}

type LoginResult = "ok" | "invalid" | "expired";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  loading: boolean;
}

const SESSION_KEY = "auth-user";
const SESSION_VERSION = "v2";

const AuthContext = createContext<AuthContextType | null>(null);

function isSessionValid(session: Session, user: StoredUser | undefined): boolean {
  if (!user) return false;
  if (session.sessionVersion !== user.sessionVersion) return false;
  if (isExpired(user)) return false;
  if (session.expiresAt !== null && Date.now() > session.expiresAt) return false;
  return true;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const validateSession = useCallback(() => {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) {
      setUser(null);
      return;
    }

    try {
      const session: Session = JSON.parse(raw);

      if (session.version !== SESSION_VERSION) {
        throw new Error("session version mismatch");
      }

      const stored = findUser(session.username);

      if (isSessionValid(session, stored)) {
        setUser({ username: stored!.username, role: stored!.role });
      } else {
        setUser(null);
        localStorage.removeItem(SESSION_KEY);
      }
    } catch {
      setUser(null);
      localStorage.removeItem(SESSION_KEY);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      await ensureSeeded();
      if (cancelled) return;
      validateSession();
      setLoading(false);
    })();

    // Если учитель в другой вкладке изменил креды или удалил студента,
    // сессия студента инвалидируется автоматически.
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_USERS_KEY || e.key === SESSION_KEY) {
        validateSession();
      }
    };

    const handleFocus = () => validateSession();

    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleFocus);

    return () => {
      cancelled = true;
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleFocus);
    };
  }, [validateSession]);

  const login = async (
    username: string,
    password: string
  ): Promise<LoginResult> => {
    await ensureSeeded();
    const stored = findUser(username);

    if (!stored) return "invalid";
    if (isExpired(stored)) return "expired";

    const inputHash = await hashPassword(stored.username, password);
    if (inputHash !== stored.passwordHash) return "invalid";

    const session: Session = {
      version: SESSION_VERSION,
      username: stored.username,
      role: stored.role,
      sessionVersion: stored.sessionVersion,
      expiresAt: stored.expiresAt,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser({ username: stored.username, role: stored.role });
    return "ok";
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthProvider missing");
  return ctx;
};