import { NextRequest, NextResponse } from "next/server";
import { renewUser } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

export async function POST(req: NextRequest, ctx: { params: { username: string } }) {
  const current = await getCurrentUser();
  if (!current) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (current.role !== "teacher") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: { days?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }

  const result = await renewUser(ctx.params.username, Number(body.days) || 30);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}