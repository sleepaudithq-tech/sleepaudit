import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io"
const slug = "/blog/glycine-and-sleep"

export const metadata = {
  title: "Glycine and Sleep: What Science Really Says (2025)",
  description:
    "Amino acid or secret sleep ally? We trace glycine from basic biology to clinical trials, uncovering how it affects sleep and why it pairs so often with magnesium.",
  alternates: { canonical: slug },
  openGraph: {
    type: "article",
    title: "Glycine and Sleep: What Science Really Says (2025)",
    description:
      "A research-based guide to glycine supplements, their role in sleep biology, and what the evidence actually shows.",
    url: site + slug,
    images: [
      {
        url: site + "/images/glycine-sleep-hero.png",
        width: 1200,
        height: 630,
        alt: "Scoop of glycine powder next to a glass of water on a nightstand",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: [site + "/images/glycine-sleep-hero.png"] },
}

export default function Page() {
  const category: CategoryKey = "supplements"
  const title = "Glycine and Sleep: What Science Really Says (2025)"
  const url = site + slug
  const hero = "/images/glycine-sleep-hero.png"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="Amino acid or secret sleep ally? We trace glycine from basic biology to clinical trials, uncovering how it affects sleep and why it pairs so often with magnesium."
        datePublished="2025-09-30"
        author="The SleepAudit Team"
        image={hero}
      />
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
