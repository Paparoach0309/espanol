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
import { Role } from "../lib/usersStore";

interface User {
  username: string;
  role: Role;
}

type LoginResult = "ok" | "invalid" | "expired";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

async function parseLoginError(res: Response): Promise<LoginResult> {
  try {
    const body = (await res.json()) as { error?: string };
    if (body.error === "expired") return "expired";
  } catch {
    // ignore
  }
  return "invalid";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const validateSession = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { credentials: "same-origin" });
      if (res.ok) {
        const body = (await res.json()) as { user: User };
        setUser(body.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      await validateSession();
      if (cancelled) return;
      setLoading(false);
    })();

    // Если учитель в другой вкладке изменил креды или удалил студента,
    // сессия студента инвалидируется на сервере — перепроверяем при фокусе.
    const handleFocus = () => {
      void validateSession();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      cancelled = true;
      window.removeEventListener("focus", handleFocus);
    };
  }, [validateSession]);

  const login = async (
    username: string,
    password: string
  ): Promise<LoginResult> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const body = (await res.json()) as { user: User };
        setUser(body.user);
        return "ok";
      }

      return await parseLoginError(res);
    } catch {
      return "invalid";
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "same-origin",
      });
    } catch {
      // сессию всё равно сбрасываем локально
    }
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