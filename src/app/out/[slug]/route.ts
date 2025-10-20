import { NextResponse } from "next/server";

// Simple registry for affiliate links. Add your partners here.
const AFFILIATE_LINKS: Record<string, string> = {
  "magnesium-l-threonate": "https://amzn.to/example1?tag=sleepaudit-20",
  "melatonin-3mg": "https://amzn.to/example2?tag=sleepaudit-20",
  "cooling-sheet-set": "https://amzn.to/example3?tag=sleepaudit-20",
  // Add more as you monetize posts
};

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const url = AFFILIATE_LINKS[params.slug];
  if (!url) {
    return NextResponse.redirect("/", { status: 302 });
  }

  // Track click if you later want analytics (optional)
  // Example: await saveClick(params.slug);

  return NextResponse.redirect(url, { status: 302 });
}

