import { notFound } from "next/navigation"
import { CATEGORY_MAP, type CategoryKey } from "@/config/categories"

function isCategoryKey(x: string): x is CategoryKey {
  return Object.prototype.hasOwnProperty.call(CATEGORY_MAP, x)
}

// ✅ params is NOT a Promise; no await needed
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  if (!isCategoryKey(slug)) return {}

  const cat = CATEGORY_MAP[slug]
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io"

  return {
    title: `${cat.title} | SleepAudit.io`,
    alternates: { canonical: cat.href },
    openGraph: {
      type: "website",
      title: `${cat.title} | SleepAudit.io`,
      url: site + cat.href,
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  if (!isCategoryKey(slug)) notFound()
  const cat = CATEGORY_MAP[slug]

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold">{cat.title}</h1>
      {/* ...your hub content... */}
    </main>
  )
}

export function generateStaticParams() {
  return (Object.keys(CATEGORY_MAP) as CategoryKey[]).map((slug) => ({ slug }))
}
