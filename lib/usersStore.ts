export type Role = "student" | "teacher";

export interface StoredUser {
  username: string;
  passwordHash: string;
  role: Role;
  createdAt: number;
  expiresAt: number | null;
  sessionVersion: number;
}

export type PublicUser = Omit<StoredUser, "passwordHash">;

export interface CreateUserInput {
  username: string;
  password: string;
  role: Role;
  validityDays?: number;
}

export const DEFAULT_VALIDITY_MS = 30 * 24 * 60 * 60 * 1000;
export const DEFAULT_VALIDITY_DAYS = 30;

export function isExpired(user: { expiresAt: number | null }): boolean {
  return user.expiresAt !== null && Date.now() > user.expiresAt;
}

export function formatExpiry(expiresAt: number | null): string {
  if (expiresAt === null) return "Бессрочно";
  return new Date(expiresAt).toLocaleString("ru-RU");
}