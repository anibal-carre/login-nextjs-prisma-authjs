import { NextResponse } from "next/server";
import db from "@/app/libs/db";

export async function GET() {
  const users = await db.user.findMany();

  return NextResponse.json(users);
}
