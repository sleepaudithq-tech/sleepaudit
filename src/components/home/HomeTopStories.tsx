import Link from "next/link"
import Image from "next/image"

export type PostCard = {
  slug: string
  title: string
  date?: string
  category?: string
  excerpt?: string
  image?: string // optional hero/thumbnail path
}

export default function HomeTopStories({ posts }: { posts: PostCard[] }) {
  if (!posts?.length) return null

  return (
    <aside className="space-y-5 fade-up">
      <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-400">Top Stories</h3>
      <ul className="space-y-4">
        {posts.map((p, i) => (
          <li
            key={p.slug}
            className="group flex items-start gap-3 rounded-lg border border-neutral-800/60 bg-neutral-950/40 transition-colors hover:bg-neutral-900/50"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* index badge */}
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-xs text-neutral-300">
              {i + 1}
            </div>

            {/* thumbnail */}
            <div className="relative h-12 w-16 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
              <Image
                src={p.image || "/images/og-default.jpg"}
                alt={p.title}
                fill
                sizes="64px"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover object-center transition will-change-transform group-hover:scale-105"
              />
            </div>

            {/* text */}
            <div className="min-w-0 py-2">
              <Link href={p.slug} className="block">
                <p className="line-clamp-2 text-[15px] leading-snug text-neutral-100 group-hover:text-neutral-50">
                  {p.title}
                </p>
              </Link>
              {p.category ? <p className="mt-1 text-xs text-neutral-400">{p.category}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
