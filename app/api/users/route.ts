import { NextRequest, NextResponse } from "next/server";
import { createUser, listUsers } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Role } from "@/lib/usersStore";

export async function GET() {
  const current = await getCurrentUser();
  if (!current) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (current.role !== "teacher") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const users = await listUsers();
  return NextResponse.json({ users });
}

export async function POST(req: NextRequest) {
  const current = await getCurrentUser();
  if (!current) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (current.role !== "teacher") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: { username?: string; password?: string; role?: Role; validityDays?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }

  const role: Role = body.role === "teacher" ? "teacher" : "student";
  const result = await createUser({
    username: (body.username ?? "").trim(),
    password: body.password ?? "",
    role,
    validityDays: body.validityDays,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  return NextResponse.json({ ok: true, user: result.user });
}