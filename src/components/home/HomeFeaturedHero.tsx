import Link from "next/link"
import Image from "next/image"
import HomeTopStories, { type PostCard } from "./HomeTopStories"
import { POSTS } from "@/content/posts"

type Post = {
  slug: string
  title: string
  date?: string
  category?: string
  excerpt?: string
  image?: string
  featured?: boolean
}

function getAllPosts(): Post[] {
  // Cast to the minimal shape we need
  return (POSTS as any as Post[])
    .filter((p) => !("draft" in p && (p as any).draft))
    .sort((a, b) => ((a.date || "") < (b.date || "") ? 1 : -1))
}

export default function HomeFeaturedHero() {
  const all = getAllPosts()

  if (!all.length) return null

  const pinned = all.find((p) => p.featured)
  const feature = pinned || all[0]

  const side = all.filter((p) => p.slug !== feature.slug).slice(0, 4)

  const cover = feature.image || "/images/cool-bedroom.jpg"

  return (
    <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-12">
      {/* Left: big feature */}
      <Link
        href={feature.slug}
        className="relative col-span-1 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 md:col-span-7 glow-hover fade-up"
      >
        {/* image */}
        <div className="relative h-[340px] w-full sm:h-[420px] will-change-transform">
          <Image
            src={cover}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
            className="object-cover object-center"
          />
          {/* gradient + vignette for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
        </div>

        {/* overlay copy */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          {/* category / date (optional) */}
          {feature.category ? (
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-300">
              {feature.category}
            </p>
          ) : null}

          {/* headline with purple ribbon */}
          <h2 className="mb-2 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.015em] text-neutral-50 sm:text-3xl">
            <span
              className="inline-block rounded-md bg-purple-500/25 px-1.5 py-0.5 backdrop-blur-sm"
              style={{ animation: "floatSlow 8s ease-in-out infinite" }}
            >
              {feature.title}
            </span>
          </h2>

          {/* dek */}
          {feature.excerpt ? (
            <p className="max-w-2xl text-neutral-200/90">{feature.excerpt}</p>
          ) : null}

          <span className="mt-3 inline-flex items-center text-sm font-medium text-neutral-100">
            Read article →
          </span>
        </div>
      </Link>

      {/* Right: staggered list */}
      <div className="col-span-1 md:col-span-5">
        <HomeTopStories posts={side as PostCard[]} />
      </div>
    </section>
  )
}
