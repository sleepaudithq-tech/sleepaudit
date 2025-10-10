import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "Glycine for Sleep: A Practical Guide",
  description:
    "What glycine is, how it may improve sleep quality and next-day alertness, and how to try 3 g before bed—plus simple stacks and cautions.",
  alternates: { canonical: "/supplements/glycine-for-sleep" },
  openGraph: {
    type: "article",
    title: "Glycine for Sleep: A Practical Guide",
    description:
      "Evidence snapshot of glycine for sleep—benefits, best timing (3 g pre-bed), stacks, and cautions.",
    images: [{ url: "/images/glycine-hero.png", width: 1200, height: 630, alt: "Glycine powder and bedtime" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const slug = "/supplements/glycine-for-sleep"
  const category: CategoryKey = "supplements"
  const title = "Glycine for Sleep: A Practical Guide"
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io"
  const url = site + slug
  const hero = "/images/glycine-hero.png"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="What glycine is, how it may improve sleep quality and next-day alertness, and how to try 3 g before bed—plus simple stacks and cautions."
        datePublished="2025-09-30"
        author="The SleepAudit Team"
        image={hero}
      />
      <figure className="mb-8">
        <img
          src={hero}
          alt="Glycine hero image"
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
