import Link from "next/link"
import { POSTS } from "@/content/posts"
import { CATEGORY_MAP, type CategoryKey } from "@/config/categories"

type Props = {
  category: CategoryKey
  currentSlug: string
  count?: number
}

export default function RelatedPosts({ category, currentSlug, count = 3 }: Props) {
  const related = POSTS
    .filter(p => p.type === "article" && p.category === category && p.slug !== currentSlug)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, count)

  if (related.length === 0) return null

  return (
    <section className="not-prose mt-10">
      <h2 className="mb-3 text-xl font-semibold">
        Related in {CATEGORY_MAP[category].title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map(p => (
          <Link
            key={p.slug}
            href={p.slug}
            className="block rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 hover:bg-neutral-900 transition"
          >
            <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
            {p.excerpt ? (
              <p className="mt-2 text-sm text-neutral-400 line-clamp-3">{p.excerpt}</p>
            ) : null}
            <span className="mt-3 inline-block text-sm text-sky-400">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
