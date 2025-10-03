import Link from "next/link"
import type { PostMeta } from "@/content/posts"
import { CATEGORY_MAP } from "@/config/categories"

export function PostCard({ post }: { post: PostMeta }) {
  const cat = CATEGORY_MAP[post.category]
  const catTitle = cat?.title ?? post.category
  const date = new Date(post.date)

  return (
    <article
      className={[
        "not-prose rounded-2xl border border-neutral-200 dark:border-neutral-800",
        "p-4 hover:shadow-sm transition bg-transparent",
      ].join(" ")}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold leading-snug">
        <Link href={post.slug} className="hover:underline underline-offset-4">
          {post.title}
        </Link>
      </h3>

      {/* Meta: Category • Date */}
      <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
        <span>{catTitle}</span>
        <span className="px-1.5">•</span>
        <time dateTime={date.toISOString()}>
          {date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
        </time>
      </div>

      {/* Excerpt */}
      {post.excerpt ? (
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {post.excerpt}
        </p>
      ) : null}

      {/* CTA */}
      <div className="mt-3">
        <Link
          href={post.slug}
          className="text-sm font-medium hover:underline underline-offset-4"
          aria-label={`Read ${post.title}`}
        >
          Read article →
        </Link>
      </div>
    </article>
  )
}
