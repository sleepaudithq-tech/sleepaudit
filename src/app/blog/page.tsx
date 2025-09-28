import { readdirSync, existsSync } from "fs";
import { join } from "path";
import Link from "next/link"

// Directory with blog posts as /blog/<slug>/page.mdx
const BLOG_DIR = join(process.cwd(), "src/app/blog")

type Post = {
  slug: string
  title: string
  excerpt?: string
  categories: string[]
  author?: string
  published: Date
  readingMinutes: number
}

/** Very light reading-time estimator (~200 wpm) */
function estimateReadingMinutes(text: string): number {
  // strip code fences & html-ish tags for a closer count
  const cleaned = text
    .replace(/```[\s\S]*?```/g, " ") // code blocks
    .replace(/<[^>]+>/g, " ") // html tags
    .replace(/export const [\s\S]*?=\s*[\s\S]*?;?/g, " ") // export const ... blocks
  const words = cleaned.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function getSlugs(): string[] {
  return readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    // ignore route groups and utility dirs
    .filter((name) => !name.startsWith("(") && !name.startsWith("_"))
    .filter((name) => !["rss.xml", "sitemap.xml", "api"].includes(name))
    // only keep folders that actually have an MDX page
    .filter((name) => existsSync(join(BLOG_DIR, name, "page.mdx")));
}

async function loadPosts() {
  const slugs = getSlugs(); // however you already do this

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod: any = await import(`./${slug}/page.mdx`);
      const meta = mod.metadata ?? {};

      // Normalize published into Date | undefined
      const published: Date | undefined = meta.published
        ? new Date(meta.published)
        : undefined;

      return {
        slug,
        title: String(meta.title ?? slug.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase())),
        excerpt: meta.excerpt as string | undefined,
        author: meta.author as string | undefined,
        categories: (meta.categories ?? []) as string[] | undefined,
        readingMinutes: meta.readingMinutes as number | undefined,
        published, // already normalized
      };
    })
  );

  // Optional: sort newest first, but only when published exists
  posts.sort((a, b) => {
    const ad = a.published?.getTime() ?? 0;
    const bd = b.published?.getTime() ?? 0;
    return bd - ad;
  });

  return posts;
}

function fmtDate(d?: string | Date) {
  if (!d) return "";
  const dt = d instanceof Date ? d : new Date(d);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const sp = await searchParams;
  const q = (sp?.q ?? "").toLowerCase().trim();
  const categoryFilter = (sp?.category ?? "").trim();

  const posts = await loadPosts()

  // collect categories for the filter dropdown — sanitize to string[]
  const categoriesRaw = posts.flatMap((p) => p.categories ?? [])
  const categories = categoriesRaw.filter((x): x is string => typeof x === "string")
  const allCategories = Array.from(new Set(categories)).sort((a, b) => a.localeCompare(b))

  // filter by query + category
  const filtered = posts.filter((p) => {
    const catList = p.categories ?? []
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      (p.excerpt?.toLowerCase().includes(q) ?? false) ||
      catList.some((c) => c.toLowerCase().includes(q))
    const matchesCat = !categoryFilter || catList.includes(categoryFilter)
    return matchesQ && matchesCat
  })

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">SleepAudit Blog</h1>
        <p className="mt-2 text-neutral-600">
          Evidence-based sleep guides, reviews, and how-tos. Use search or filter by category.
        </p>
      </header>

      {/* Search + Category Filter */}
      <form className="not-prose mb-8 grid gap-3 sm:flex sm:items-center">
        <input
          type="search"
          name="q"
          placeholder="Search posts…"
          defaultValue={q}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
          aria-label="Search posts"
        />
        <select
          name="category"
          defaultValue={categoryFilter}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm sm:w-52 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
          aria-label="Filter by category"
        >
          <option value="">All categories</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="inline-flex h-9 items-center rounded-md bg-black px-3 text-sm font-medium text-white hover:opacity-90"
        >
          Apply
        </button>
      </form>

      {/* Posts List */}
      {filtered.length === 0 ? (
        <p className="text-neutral-600">No posts found. Try a different search or category.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map((p) => {
            const catList = p.categories ?? []
            return (
              <li key={p.slug} className="group rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
                <article>
                  <header className="mb-2">
                    <h2 className="text-xl font-semibold leading-snug">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="underline decoration-neutral-400 group-hover:decoration-neutral-700"
                      >
                        {p.title}
                      </Link>
                    </h2>
                    {/* date / author / read time */}
                    <div className="mt-1 text-xs text-neutral-500">
                      {p.published ? (
                        <time dateTime={new Date(p.published).toISOString()}>
                          {fmtDate(p.published)}
                        </time>
                      ) : null}
                      {p.author ? <> • {p.author}</> : null}
                      {p.readingMinutes ? <> • {p.readingMinutes} min read</> : null}
                    </div>
                  </header>

                  {p.excerpt ? <p className="text-sm text-neutral-700 dark:text-neutral-300">{p.excerpt}</p> : null}

                  {catList.length > 0 ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {catList.map((c) => (
                        <li key={c}>
                          <Link
                            href={`/blog?category=${encodeURIComponent(c)}`}
                            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                          >
                            {c}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
