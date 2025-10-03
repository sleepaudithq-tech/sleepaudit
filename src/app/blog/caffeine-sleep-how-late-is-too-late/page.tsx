import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"
import SeoFaqJsonLd from "@/components/SeoFaqJsonLd"
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
      <SeoFaqJsonLd
        items={[
          {
            question: "How many hours before bed should I stop caffeine?",
            answer:
              "Most adults should stop caffeine 6–8 hours before bedtime. For a 10:30 p.m. lights-out, plan your last dose around 2:30–4:30 p.m. Later use—especially within 4 hours—raises the risk of lighter, more fragmented sleep.",
          },
          {
            question: "How much caffeine is in a cup of coffee?",
            answer:
              "An 8 oz brewed coffee typically has about 95 mg of caffeine, while a 16 oz Starbucks Grande Pike has roughly 310 mg. Strength and size matter—one large coffee can equal several energy drinks.",
          },
          {
            question: "Do energy drinks like Celsius or Red Bull affect sleep?",
            answer:
              "Yes. A Celsius Original has about 200 mg of caffeine (Celsius Heat ~300 mg) and a Red Bull (8.4 oz) about 80 mg. A Celsius at 5 p.m. can leave ~100 mg—about a Red Bull—still active at midnight for many people.",
          },
          {
            question: "What is the half-life of caffeine?",
            answer:
              "On average about 5 hours, but it can range from ~1.5 to 9+ hours depending on genetics, hormones, medications, and liver function. That’s why afternoon caffeine often lingers into the night.",
          },
          {
            question: "Is 400 mg of caffeine safe?",
            answer:
              "For most healthy adults, up to 400 mg per day is generally considered safe by U.S. health authorities. That’s roughly two Celsius Originals or a grande coffee plus a smaller drink. Sensitivity varies, and timing near bedtime still disrupts sleep.",
          },
          {
            question: "Why do I fall asleep after caffeine but still feel tired?",
            answer:
              "Caffeine can mask sleepiness without fixing it. Lab studies show people may fall asleep yet spend less time in deep, restorative stages, leading to groggier mornings despite a full night in bed.",
          },
          {
            question: "Does decaf coffee have caffeine?",
            answer:
              "Yes—usually a small amount (about 2–5 mg per 8 oz, though it varies by brand and brew). It’s far less than regular coffee but not zero.",
          },
          {
            question: "When is the best time of day to drink caffeine?",
            answer:
              "Generally in the morning to early afternoon. Front-loading your intake (and keeping total daily caffeine around 200–300 mg) helps protect sleep; avoid use within 6–8 hours of bedtime.",
          },
        ]}
      />
      <MDXContent>
        <Article />
      </MDXContent>
      <RelatedPosts category={category} currentSlug={slug} />
    </main>
  )
}
