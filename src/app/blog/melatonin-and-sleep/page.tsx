import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io"
const slug = "/blog/melatonin-and-sleep"

export const metadata = {
  title: "Melatonin and Sleep: What Science Really Says (2025)",
  description:
    "Melatonin is one of the most searched sleep supplements. But what does the science actually say? A deep dive into its history, biology, timing, and clinical evidence.",
  alternates: { canonical: slug },
  openGraph: {
    type: "article",
    title: "Melatonin and Sleep: What Science Really Says (2025)",
    description:
      "Melatonin is not a sleeping pill -- it’s a circadian signal. Learn how it works, what it helps, and when it doesn’t.",
    url: site + slug,
    images: [
      {
        url: site + "/images/melatonin-bp5x2.png",
        width: 1200,
        height: 630,
        alt: "Melatonin BP5 hero image",
      },
    ],
    publishedTime: "2025-09-30",
    modifiedTime: "2025-09-30",
    authors: ["The SleepAudit Team"],
    tags: ["Melatonin", "Supplements", "Circadian Rhythm", "Jet Lag"],
  },
  twitter: {
    card: "summary_large_image",
    images: [site + "/images/melatonin-bp5x2.png"],
  },
}

export default function Page() {
  const category: CategoryKey = "supplements"
  const title = "Melatonin and Sleep: What Science Really Says (2025)"
  const url = site + slug
  const hero = "/images/melatonin-bp5x2.png"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="Melatonin is one of the most searched sleep supplements. But what does the science actually say? A deep dive into its history, biology, timing, and clinical evidence."
        datePublished="2025-09-30"
        author="The SleepAudit Team"
        image={hero}
      />
      <figure className="mb-8">
        <img
          src={hero}
          alt="Melatonin supplement bottle and night sky imagery"
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
