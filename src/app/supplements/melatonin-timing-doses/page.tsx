import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "Melatonin Timing & Doses: How to Use It Safely",
  description:
    "How to use melatonin for sleep and circadian shifting: best timing windows, dose ranges, and jet-lag strategies.",
  alternates: { canonical: "/supplements/melatonin-timing-doses" },
  openGraph: {
    type: "article",
    title: "Melatonin Timing & Doses: How to Use It Safely",
    description:
      "Evidence-backed guidance on melatonin timing, dosing, and travel strategies.",
    images: [{ url: "/images/cool-bedroom.jpg", width: 1200, height: 630, alt: "Melatonin timing and dosing guide" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const slug = "/supplements/melatonin-timing-doses"
  const category: CategoryKey = "supplements"
  const title = "Melatonin Timing & Doses: How to Use It Safely"
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io"
  const url = site + slug

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="How to use melatonin for sleep and circadian shifting: best timing windows, dose ranges, and jet-lag strategies."
        datePublished="2025-09-30"
        author="The SleepAudit Team"
        image="/images/cool-bedroom.jpg"
      />
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
