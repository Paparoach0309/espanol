"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

type Role = "student" | "teacher";

interface User {
  username: string;
  role: Role;
  version: string;
}

interface InternalUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  loading: boolean;
}

const USERS: InternalUser[] = [
  { username: "student1", password: "1234", role: "student", version: "v2" },
  { username: "teacher1", password: "admin", role: "teacher", version: "v2" },
];
const AUTH_VERSION = "v1";
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("auth-user");

    if (stored) {
      const parsed: User = JSON.parse(stored);

      if (parsed.version === AUTH_VERSION) {
        setUser(parsed);
      } else {
        localStorage.removeItem("auth-user");
      }
    }

    setLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    const found = USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (!found) return false;

    const userData: User = {
      username: found.username,
      role: found.role,
      version: "v2",
    };

    setUser(userData);
    localStorage.setItem(
      "auth-user",
      JSON.stringify({ ...userData, version: AUTH_VERSION })
    );
    router.push("/");
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth-user");
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
