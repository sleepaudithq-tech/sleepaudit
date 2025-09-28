import { notFound } from "next/navigation"
import Link from "next/link"
import { CATEGORIES, CATEGORY_MAP } from "@/config/categories"
import { POSTS } from "@/content/posts"

export function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = CATEGORY_MAP[slug]
  if (!cat) return {}
  return {
    title: `${cat.title} | SleepAudit.io`,
    description: cat.description,
    alternates: { canonical: `/category/${cat.slug}` },
    openGraph: { title: cat.title, description: cat.description, url: `/category/${cat.slug}` },
    twitter: { card: "summary_large_image", title: cat.title, description: cat.description },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = CATEGORY_MAP[slug]
  if (!cat) return notFound()

  const posts = POSTS
    .filter(p => p.category === cat.slug)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{cat.title}</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400 max-w-3xl">{cat.description}</p>

        {cat.collections?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {cat.collections.map(col => (
              <a
                key={col.href}
                href={col.href}
                className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-100 hover:dark:bg-neutral-800 transition"
              >
                {col.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      {posts.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">No posts yet--publishing soon.</p>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold">
                <Link href={post.slug} className="hover:underline">{post.title}</Link>
              </h3>
              {post.excerpt && <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{post.excerpt}</p>}
              <div className="mt-3 text-xs text-neutral-500">{new Date(post.date).toLocaleDateString()}</div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
