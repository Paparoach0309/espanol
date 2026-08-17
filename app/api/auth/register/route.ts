import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/lib/db";
import { DEFAULT_VALIDITY_DAYS } from "@/lib/usersStore";

export async function POST(req: NextRequest) {
  let body: { username?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }

  const result = await createUser({
    username: (body.username ?? "").trim(),
    password: body.password ?? "",
    role: "student",
    validityDays: DEFAULT_VALIDITY_DAYS,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  return NextResponse.json({ ok: true, user: result.user });
}