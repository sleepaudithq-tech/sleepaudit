import { NextResponse } from "next/server";

export async function GET() {
  // Redirect legacy Cooling Hub URL to its new home under Better Sleep Solutions
  return NextResponse.redirect("/category/better-sleep-solutions#cooling", 301);
}

