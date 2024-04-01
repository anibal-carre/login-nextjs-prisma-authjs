import { NextResponse } from "next/server";

export async function POST(res) {
  const data = await res.json();

  console.log(data);

  return NextResponse.json("Registering....");
}
