import { ARTICLES } from "@/content/posts"
import { PostCard } from "@/components/PostCard"
import { CATEGORIES } from "@/config/categories"
import { CategoryTile } from "@/components/CategoryTile"
import HomeFeaturedHero from "@/components/home/HomeFeaturedHero"

export const metadata = {
  title: "SleepAudit.io -- Evidence-based sleep guides and reviews",
  description:
    "Clear, science-first sleep guidance and unbiased product reviews. Start with our latest research-backed articles or browse by category.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SleepAudit.io",
    description:
      "Clear, science-first sleep guidance and unbiased product reviews.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image", title: "SleepAudit.io" },
}

export default function HomePage() {
  const latest = [...ARTICLES]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 6)

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">SleepAudit.io</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Evidence-based sleep guides and independent product reviews. Practical,
          readable, and built for results.
        </p>
      </section>

      {/* Featured hero */}
      <HomeFeaturedHero />

      {/* Latest posts */}
      <section className="mb-12 [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
        <h2 className="text-2xl font-semibold tracking-tight">Latest</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((p, i) => (
            <div
              key={p.slug}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950/50 p-5 glow-hover fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <PostCard post={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Category tiles */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Explore Categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </main>
  )
}
