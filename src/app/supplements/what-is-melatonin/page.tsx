import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "What Is Melatonin? How It Works & When It Helps",
  description:
    "Melatonin is a body-clock signal—not a sedative. Learn what it is, what it does, safety basics, and when it's useful.",
  alternates: { canonical: "/supplements/what-is-melatonin" },
  openGraph: {
    type: "article",
    title: "What Is Melatonin? How It Works & When It Helps",
    description:
      "Melatonin is a body-clock signal—not a sedative. Learn what it is, what it does, safety basics, and when it's useful.",
    images: [{ url: "/images/cool-bedroom.jpg", width: 1200, height: 630, alt: "Melatonin supplement" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const url =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
    "/supplements/what-is-melatonin"

  const slug = "/supplements/what-is-melatonin"
  const category: CategoryKey = "supplements"
  const title = "What Is Melatonin? How It Works & When It Helps"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="Melatonin is a body-clock signal—not a sedative. Learn what it is, what it does, safety basics, and when it's useful."
        datePublished="2025-09-28"
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
