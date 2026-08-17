import { NextRequest, NextResponse } from "next/server";
import { deleteUser, updateUserCredentials } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

export async function PATCH(req: NextRequest, ctx: { params: { username: string } }) {
  const current = await getCurrentUser();
  if (!current) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (current.role !== "teacher") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: { username?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }

  const result = await updateUserCredentials(ctx.params.username, {
    username: body.username,
    password: body.password,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  return NextResponse.json({ ok: true, user: result.user });
}

export async function DELETE(_req: NextRequest, ctx: { params: { username: string } }) {
  const current = await getCurrentUser();
  if (!current) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (current.role !== "teacher") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  if (ctx.params.username.toLowerCase() === current.username.toLowerCase()) {
    return NextResponse.json(
      { ok: false, error: "Нельзя удалить свой собственный аккаунт" },
      { status: 400 }
    );
  }

  const deleted = await deleteUser(ctx.params.username);
  if (!deleted) {
    return NextResponse.json({ ok: false, error: "Пользователь не найден" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}