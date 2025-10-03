import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "Circadian Rhythms: Your Body's 24-Hour Clock",
  description:
    "How your internal body clock shapes sleep, health, and modern life -- from melatonin and cortisol to blue light, jet lag, and social rhythms.",
  alternates: { canonical: "/blog/circadian-rhythms" },
  openGraph: {
    type: "article",
    title: "Circadian Rhythms: Your Body's 24-Hour Clock",
    description:
      "A deep dive into the science of circadian rhythms: history, hormones, modern disruptions, and why alignment matters more than ever.",
    url: "/blog/circadian-rhythms",
    images: [
      {
        url: "/images/circadian_timeline_web3_v2.png",
        width: 1200,
        height: 630,
        alt: "Circadian rhythm timeline with cortisol and melatonin curves",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const url =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
    "/blog/circadian-rhythms"

  const slug = "/blog/circadian-rhythms"
  const category: CategoryKey = "science-trends"
  const title = "Circadian Rhythms: Your Body's 24-Hour Clock"
  const description =
    "How your internal body clock shapes sleep, health, and modern life -- from melatonin and cortisol to blue light, jet lag, and social rhythms."
  const datePublished = "2025-09-28"
  const author = "The SleepAudit Team"
  const image = "/images/circadian_timeline_web3_v2.png"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description={description}
        datePublished={datePublished}
        author={author}
        image={image}
      />
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
