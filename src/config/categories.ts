export type Category = {
  slug: string
  title: string
  description: string
  collections?: { label: string; href: string }[]
}

export const CATEGORIES: Category[] = [
  {
    slug: "sleep-guides",
    title: "Sleep Guides",
    description:
      "Plain-English guides to core sleep concepts--stages, circadian rhythm, sleep pressure--and how to use them.",
    collections: [
      { label: "Sleep Basics & Science", href: "/learn/basics" },
    ],
  },
  {
    slug: "product-reviews",
    title: "Product Reviews",
    description:
      "Evidence-based reviews of mattresses, pillows, sheets, blackout curtains, and sleep tech.",
  },
  {
    slug: "comparisons",
    title: "Comparisons",
    description:
      "Head-to-head breakdowns (e.g., latex vs memory foam, white noise vs pink noise) with pros/cons and fit.",
  },
  {
    slug: "science-trends",
    title: "Science & Trends",
    description:
      "New research, blue-light debates, cooling science, and the tech shaping how we sleep.",
  },
  {
    slug: "better-sleep-solutions",
    title: "Better Sleep Solutions",
    description:
      "Practical fixes for hot sleeping, snoring, jet lag, shift work, and stress wake-ups.",
    collections: [
      { label: "Sleep Disorders & Challenges", href: "/learn/disorders" },
      { label: "Sleep Environment & Optimization", href: "/learn/environment" },
    ],
  },
]

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map(c => [c.slug, c]))
