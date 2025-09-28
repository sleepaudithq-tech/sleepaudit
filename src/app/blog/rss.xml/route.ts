import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog")
const SITE =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"

type PostMeta = {
    slug: string
    title: string
    excerpt?: string
    published: Date
    url: string
}

function getSlugs() {
    if (!fs.existsSync(BLOG_DIR)) return []
    return fs
        .readdirSync(BLOG_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        // ignore route groups and utility dirs
        .filter((name) => !name.startsWith("(") && !name.startsWith("_"))
        .filter((name) => !["rss.xml", "sitemap.xml", "api"].includes(name))
        // only keep folders that actually have an MDX page
        .filter((name) => fs.existsSync(path.join(BLOG_DIR, name, "page.mdx")))
}

async function getPosts(): Promise<PostMeta[]> {
    const slugs = getSlugs()

    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const mod: any = await import(`../${slug}/page.mdx`)
            const title: string =
                mod.metadata?.title ??
                slug.replace(/-/g, " ").replace(/\b\w/g, (m: string) => m.toUpperCase())
            const excerpt: string | undefined = mod.excerpt

            let published: Date
            if (mod.published) {
                published = new Date(mod.published)
            } else {
                const filePath = path.join(BLOG_DIR, slug, "page.mdx")
                const stat = fs.statSync(filePath)
                published = stat.mtime
            }

            return {
                slug,
                title,
                excerpt,
                published,
                url: `${SITE}/blog/${slug}`,
            }
        })
    )

    posts.sort((a, b) => b.published.getTime() - a.published.getTime())
    return posts
}

function escapeXml(s = "") {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
}

export async function GET() {
    const items = await getPosts()

    const xmlItems = items
        .map(
            (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${p.url}</link>
      <guid isPermaLink="true">${p.url}</guid>
      <pubDate>${p.published.toUTCString()}</pubDate>
      ${p.excerpt ? `<description><![CDATA[${p.excerpt}]]></description>` : ""}
    </item>`
        )
        .join("")

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>SleepAudit Blog</title>
      <link>${SITE}/blog</link>
      <description>Evidence-based sleep guides and product reviews.</description>
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${xmlItems}
    </channel>
  </rss>`

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
        },
    })
}
