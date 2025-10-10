export type PostType = "article" | "collection"

import type { CategoryKey } from "@/config/categories"

// Normalize an OG image URL to a relative path when possible
const og = (m: any): string | undefined => {
  const src = m?.openGraph?.images?.[0]?.url as string | undefined
  if (!src) return undefined
  try {
    if (src.startsWith("http")) return new URL(src).pathname
  } catch {
    // ignore URL parse errors and fall through
  }
  return src
}

// Avoid importing page modules (or MDX) here to prevent circular deps during build

export type PostMeta = {
  type: PostType
  slug: string
  title: string
  date: string
  category: CategoryKey
  excerpt?: string
  image?: string
  featured?: boolean
  draft?: boolean
}

export const POSTS: PostMeta[] = [
  {
    type: "article",
    slug: "/blog/best-cooling-sheets",
    title: "Best Cooling Sheets for Hot Sleepers (2025)",
    date: "2025-09-10",
    category: "product-reviews",
    excerpt:
      "The best breathable sheets that actually stay cool. Percale cotton, Tencel lyocell, linen, and bamboo viscose top the list for 2025.",
  },
  {
    type: "article",
    slug: "/blog/alcohol-sleep-nightcaps",
    title: "Alcohol & Sleep: Why Nightcaps Backfire (2025 Guide)",
    date: "2025-10-05",
    category: "better-sleep-solutions",
    excerpt:
      "Alcohol can help you fall asleep faster—but it suppresses REM, fragments the night, and leaves you groggy. Practical cutoffs and standard drink math.",
    image: "/images/alcohol-sleep-hero-og.png",
    featured: true,
  },
  {
    type: "article",
    slug: "/blog/circadian-rhythms",
    title: "Circadian Rhythms: Your Body's 24-Hour Clock",
    date: "2025-09-28",
    category: "science-trends",
    excerpt:
      "Your internal 24-hour clock governs sleep, hormones, metabolism, and mood -- here's how to align it in modern life.",
  },
  {
    type: "article",
    slug: "/blog/melatonin-and-sleep",
    title: "Melatonin and Sleep: What Science Really Says (2025)",
    date: "2025-09-30",
    category: "supplements",
    excerpt:
      "Melatonin isn't a sedative—it’s a time signal. How it works, who it helps, and what the latest science says.",
    image: "/images/melatonin-bp5x2.png",
  },
  {
    type: "article",
    slug: "/blog/glycine-and-sleep",
    title: "Glycine and Sleep: What Science Really Says (2025)",
    date: "2025-10-01",
    category: "supplements",
    excerpt:
      "Glycine is a small amino acid with an outsized role in sleep physiology. At ~3 g before bed, it seems to improve subjective sleep and morning alertness—especially when paired with magnesium.",
    image: "/images/glycine-hero.png",
  },
  {
    type: "article",
    slug: "/supplements/melatonin-timing-doses",
    title: "Melatonin Timing & Doses: How to Use It Safely",
    date: "2025-09-30",
    category: "supplements",
    excerpt:
      "How to use melatonin—best timing windows, dose ranges, and jet-lag strategies.",
  },
  {
    type: "article",
    slug: "/supplements/glycine-for-sleep",
    title: "Glycine for Sleep: A Practical Guide",
    date: "2025-10-01",
    category: "supplements",
    excerpt:
      "Does glycine help sleep? What it is, benefits, how to try 3 g before bed, stacks, and cautions.",
    image: "/images/glycine-hero.png",
  },
  {
    type: "article",
    slug: "/blog/caffeine-sleep-how-late-is-too-late",
    title: "Caffeine & Sleep: How Late Is Too Late? (2025 Guide)",
    date: "2025-10-01",
    category: "better-sleep-solutions",
    excerpt:
      "Caffeine’s half-life, timing rules of thumb, and how to set a personal cutoff so you sleep on time—without giving up coffee.",
    image: "/images/caffeine-how-late-hero.png",
  },
  {
    type: "article",
    slug: "/supplements/what-is-melatonin",
    title: "What Is Melatonin? How It Works & When It Helps",
    date: "2025-09-27",
    category: "supplements",
    excerpt:
      "Melatonin is a body-clock signal—not a sedative. Learn what it is, what it does, safety basics, and when it's useful.",
    draft: true,
  },
  {
    type: "article",
    slug: "/supplements/magnesium-for-sleep",
    title: "Magnesium and Sleep: What Science Really Says (2025)",
    date: "2025-09-28",
    category: "supplements",
    excerpt:
      "Does magnesium help you sleep better? Forms, timing, dosing, safety, and what the evidence actually shows.",
    image: "/images/magnesium-sleep-hero.png",
  },
  {
    type: "article",
    slug: "/blog/why-you-get-hot-when-you-sleep",
    title: "Why You Get Hot When You Sleep (and What to Do About It)",
    date: "2025-08-24",
    category: "better-sleep-solutions",
    excerpt:
      "Why nights feel hot: your circadian rhythm, REM sleep quirks, and the bed microclimate. Fixes for cooler, deeper sleep.",
  },
  {
    type: "article",
    slug: "/learn/basics/what-is-sleep",
    title: "What Is Sleep? A Modern Recap of the Science (2025)",
    date: "2025-09-24",
    category: "sleep-guides",
    excerpt:
      "Sleep isn't downtime--it's an active nightly reset. Here's what modern science actually says and how to use it.",
  },
  {
    type: "collection",
    slug: "/learn/disorders",
    title: "Sleep Disorders and Challenges",
    date: "2025-09-01",
    category: "better-sleep-solutions",
    excerpt:
      "Understand insomnia, sleep apnea, restless legs, nightmares, and jet lag, plus practical next steps.",
  },
  {
    type: "collection",
    slug: "/learn/environment",
    title: "Sleep Environment and Optimization",
    date: "2025-08-18",
    category: "science-trends",
    excerpt:
      "Temperature, light, noise, and bedding tweaks that shape how quickly you fall asleep and stay there.",
  },
  {
    type: "collection",
    slug: "/learn/habits",
    title: "Sleep Habits and Lifestyle",
    date: "2025-08-05",
    category: "sleep-guides",
    excerpt:
      "Sleep hygiene, caffeine timing, exercise, and stress loops explained with actionable checklists.",
  },
]

export const ARTICLES = POSTS.filter((p) => p.type === "article")
