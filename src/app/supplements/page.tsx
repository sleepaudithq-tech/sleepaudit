import Link from "next/link"
import { POSTS } from "@/content/posts"
import Disclaimer from "@/components/ui/Disclaimer"

export const metadata = {
  title: "Supplements for Sleep",
  description:
    "Evidence-first guides to melatonin, magnesium, L-theanine, glycine, valerian, and more--timing, dosing, safety, and what actually helps.",
  alternates: { canonical: "/supplements" },
  openGraph: {
    type: "website",
    title: "Supplements for Sleep",
    description:
      "Timing, dosing, safety, and what actually helps--evidence-first guides to common sleep supplements.",
    url: "/supplements",
  },
  twitter: { card: "summary" },
}

export default function Page() {
  const items = POSTS
    .filter((p) => p.category === "supplements")
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  const featured = items.slice(0, 2)
  const rest = items.slice(2)

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Supplements for Sleep</h1>
      <p className="mt-2 text-neutral-400">
        Evidence-based primers on what works, what's safe, and how to time it. Start with
        <Link href="/supplements/what-is-melatonin" className="underline underline-offset-2 hover:text-neutral-300">
          {" "}What Is Melatonin?{" "}
        </Link>
        and magnesium, then explore stacks and protocols.
      </p>

      <Disclaimer />

      {featured.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-semibold">Featured</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((p) => (
              <Card key={p.slug} {...p} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">Browse all</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((p) => (
              <Card key={p.slug} {...p} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function Card({
  slug,
  title,
  excerpt,
  date,
}: {
  slug: string
  title: string
  excerpt?: string
  date?: string
}) {
  return (
    <Link
      href={slug}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 hover:bg-neutral-900 transition"
    >
      <h3 className="text-base font-semibold leading-snug">{title}</h3>
      {excerpt ? <p className="mt-2 text-sm text-neutral-400">{excerpt}</p> : null}
      {date ? <p className="mt-2 text-xs text-neutral-500">{new Date(date).toLocaleDateString()}</p> : null}
      <span className="mt-3 inline-block text-sm text-sky-400">Read more →</span>
    </Link>
  )
}
