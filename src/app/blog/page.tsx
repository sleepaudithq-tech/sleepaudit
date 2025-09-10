import fs from "fs"
import path from "path"
import Link from "next/link"

type ListedPost = {
  slug: string
  title: string
  excerpt?: string
}

const BLOG_DIR = path.join(process.cwd(), "src/app/blog")

function getSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

export default async function BlogIndex() {
  const slugs = getSlugs()

  // Import each MDX's exported metadata/excerpt
  const posts: ListedPost[] = await Promise.all(
    slugs.map(async (slug) => {
      const mod: any = await import(`./${slug}/page.mdx`)
      return {
        slug,
        title: mod.metadata?.title ?? slug.replace(/-/g, " "),
        excerpt: mod.excerpt,
      }
    })
  )

  // You can sort by title/date here if you add a date export later
  posts.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">SleepAudit Blog</h1>
      <ul className="mt-6 space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="group">
            <Link
              href={`/blog/${p.slug}`}
              className="text-lg font-medium underline decoration-neutral-400 group-hover:decoration-neutral-700"
            >
              {p.title}
            </Link>
            {p.excerpt && (
              <p className="mt-1 text-sm text-neutral-600">{p.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}