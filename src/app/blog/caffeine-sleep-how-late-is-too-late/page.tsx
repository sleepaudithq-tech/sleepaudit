import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "Caffeine & Sleep: How Late Is Too Late? (2025 Guide)",
  description:
    "Caffeine’s half-life, timing rules of thumb, and how to set a personal cutoff so you sleep on time—without giving up coffee.",
  alternates: { canonical: "/blog/caffeine-sleep-how-late-is-too-late" },
  openGraph: {
    type: "article",
    title: "Caffeine & Sleep: How Late Is Too Late? (2025 Guide)",
    description:
      "Understand caffeine’s half-life and circadian impact. Learn practical cutoff times, dose tips, and how to personalize your window.",
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
      "/blog/caffeine-sleep-how-late-is-too-late",
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
          "/images/caffeine-how-late-hero.png",
        width: 1200,
        height: 630,
        alt: "Coffee cup at dusk with a clock indicating evening caffeine timing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
        "/images/caffeine-how-late-hero.png",
    ],
  },
}

export default function Page() {
  const slug = "/blog/caffeine-sleep-how-late-is-too-late"
  const category: CategoryKey = "better-sleep-solutions" // Sleep Hygiene / Sleep Habits lives here
  const title = "Caffeine & Sleep: How Late Is Too Late? (2025 Guide)"
  const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") + slug

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="Caffeine’s half-life, timing rules of thumb, and how to set a personal cutoff so you sleep on time—without giving up coffee."
        datePublished="2025-10-01"
        author="The SleepAudit Team"
        image="/images/caffeine-how-late-hero.png"
      />
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
