import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { createSession, getUserForAuth } from "@/lib/db";
import { verifyPassword } from "@/lib/password";
import { isExpired, Role } from "@/lib/usersStore";
import { setSessionCookie } from "@/lib/session";

export async function POST(req: NextRequest) {
  let body: { username?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const username = (body.username ?? "").trim();
  const password = body.password ?? "";
  if (!username || !password) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const stored = await getUserForAuth(username);
  if (!stored) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const valid = await verifyPassword(password, stored.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  if (isExpired(stored)) {
    return NextResponse.json({ error: "expired" }, { status: 401 });
  }

  const token = randomBytes(32).toString("hex");
  await createSession({ token, user: stored });
  setSessionCookie(token);

  const user: { username: string; role: Role } = {
    username: stored.username,
    role: stored.role,
  };

  return NextResponse.json({ ok: true, user });
}