import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/db";
import { clearSessionCookie, getSessionToken } from "@/lib/session";

export async function POST() {
  const token = getSessionToken();
  if (token) {
    await deleteSession(token);
  }
  clearSessionCookie();
  return NextResponse.json({ ok: true });
}