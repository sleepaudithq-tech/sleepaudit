import MDXContent from "@/components/MDXContent"
import Article from "@/app/supplements/magnesium-for-sleep/content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "Magnesium and Sleep: What Science Really Says (2025)",
  description:
    "Does magnesium help you sleep better? A deep dive into the history, biology, forms, and clinical evidence behind magnesium supplements and sleep.",
  alternates: { canonical: "/blog/magnesium-and-sleep" },
  openGraph: {
    type: "article",
    title: "Magnesium and Sleep: What Science Really Says (2025)",
    description:
      "A research-based guide to magnesium supplements, their role in sleep biology, and what the evidence actually shows.",
    url: "/blog/magnesium-and-sleep",
    images: [
      {
        url: "/images/magnesium-sleep-hero.png",
        width: 1200,
        height: 630,
        alt: "Magnesium supplements and sleep imagery",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const url =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
    "/blog/magnesium-and-sleep"
  const slug = "/blog/magnesium-and-sleep"
  const category: CategoryKey = "supplements"
  const hero = "/images/magnesium-sleep-hero.png"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title="Magnesium and Sleep: What Science Really Says (2025)" slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title="Magnesium and Sleep: What Science Really Says (2025)"
        description="A research-based guide to magnesium supplements, their role in sleep biology, and what the evidence actually shows."
        datePublished="2025-09-28"
        author="The SleepAudit Team"
        image={hero}
      />
      <figure className="mb-8">
        <img
          src={hero}
          alt="Magnesium supplements and sleep imagery"
          className="w-full rounded-xl border border-neutral-800"
          loading="lazy"
        />
      </figure>
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
