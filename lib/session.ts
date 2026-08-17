import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserBySessionToken, deleteSession } from "./db";
import { DEFAULT_VALIDITY_MS, Role } from "./usersStore";

export const SESSION_COOKIE = "subjuntivo_session";
export const SESSION_MAX_AGE_S = Math.floor(DEFAULT_VALIDITY_MS / 1000);

export function setSessionCookie(token: string): void {
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_S,
  });
}

export function clearSessionCookie(): void {
  cookies().delete(SESSION_COOKIE);
}

export function getSessionToken(): string | undefined {
  return cookies().get(SESSION_COOKIE)?.value;
}

export async function getCurrentUser(): Promise<{
  username: string;
  role: Role;
} | null> {
  const token = getSessionToken();
  if (!token) return null;
  return getUserBySessionToken(token);
}

/** Стражевой вызов для серверных компонентов: перенаправляет, если сессии нет. */
export async function requireAuth(): Promise<{ username: string; role: Role }> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** Стражевой вызов для серверных компонентов: только для учителя. */
export async function requireTeacher(): Promise<{
  username: string;
  role: Role;
}> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (user.role !== "teacher") redirect("/");
  return user;
}