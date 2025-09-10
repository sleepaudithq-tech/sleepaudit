import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: new Date() },
    { url: `${SITE}/cooling`, lastModified: new Date() }, // ← added
    { url: `${SITE}/blog`, lastModified: new Date() },
  ]

  const blogDir = path.join(process.cwd(), "src/app/blog")
  if (fs.existsSync(blogDir)) {
    const slugs = fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)

    slugs.forEach((slug) =>
      urls.push({ url: `${SITE}/blog/${slug}`, lastModified: new Date() })
    )
  }

  return urls
}
