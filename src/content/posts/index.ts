export type PostType = "article" | "collection"

export type PostMeta = {
  type: PostType
  slug: string
  title: string
  date: string
  category: string
  excerpt?: string
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
    slug: "/blog/circadian-rhythms",
    title: "Circadian Rhythms: Your Body's 24-Hour Clock",
    date: "2025-09-28",
    category: "science-trends",
    excerpt:
      "Your internal 24-hour clock governs sleep, hormones, metabolism, and mood -- here's how to align it in modern life.",
  },
  {
    type: "article",
    slug: "/supplements/what-is-melatonin",
    title: "What Is Melatonin? How It Works & When It Helps",
    date: "2025-09-28",
    category: "supplements",
    excerpt:
      "Melatonin is a body-clock signal—not a sedative. Learn what it is, what it does, safety basics, and when it's useful.",
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
