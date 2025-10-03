import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "What Is Sleep? A Modern Recap of the Science (2025)",
  description:
    "A cornerstone feature on sleep: what we thought it was, what science now shows, and how modern life keeps pulling it off-beat.",
  alternates: { canonical: "/blog/what-is-sleep" },
  openGraph: {
    type: "article",
    title: "What Is Sleep? A Modern Recap of the Science",
    description:
      "A cornerstone feature on sleep—covering its stages, functions, and the 21st-century pressures reshaping it.",
    images: [
      {
        url: "/images/sleep-science-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dim room, cool bedding, faint dawn light",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const slug = "/learn/basics/what-is-sleep"
  const category: CategoryKey = "sleep-guides"
  const title = "What Is Sleep? A Modern Recap of the Science (2025)"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
