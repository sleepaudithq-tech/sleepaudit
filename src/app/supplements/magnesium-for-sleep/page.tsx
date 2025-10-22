import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import Breadcrumbs from "@/components/layout/Breadcrumbs"
import RelatedPosts from "@/components/layout/RelatedPosts"
import type { CategoryKey } from "@/config/categories"

export const metadata = {
  title: "Magnesium for Sleep: Types, Timing, and Safety",
  description:
    "Does magnesium help you sleep? Evidence review of glycinate, citrate, threonate; timing, dose ranges, side effects, and who should avoid it.",
  alternates: { canonical: "/supplements/magnesium-for-sleep" },
  openGraph: {
    type: "article",
    title: "Magnesium for Sleep: Types, Timing, and Safety",
    description:
      "Evidence review of magnesium for sleep--best forms, timing, dosing, and safety.",
    images: [{ url: "/images/cool-bedroom.jpg", width: 1200, height: 630, alt: "Magnesium supplement and bedtime" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const url =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
    "/supplements/magnesium-for-sleep"

  const slug = "/supplements/magnesium-for-sleep"
  const category: CategoryKey = "supplements"
  const title = "Magnesium for Sleep: Types, Timing, and Safety"
  const hero = "/images/magnesium-sleep-hero.png"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs category={category} title={title} slug={slug} />
      <SeoBlogJsonLd
        url={url}
        title={title}
        description="Does magnesium help you sleep? Evidence review of glycinate, citrate, threonate; timing, dose ranges, side effects, and who should avoid it."
        datePublished="2025-09-28"
        author="The SleepAudit Team"
        image={hero}
      />
      <figure className="mb-8">
        <img
          src={hero}
          alt="Magnesium supplement hero image"
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
