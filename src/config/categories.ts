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

export type NavItem = {
  label: string
  href: string
  matchPrefix?: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Sleep Guides", href: "/category/sleep-guides" },
  { label: "Better Sleep Solutions", href: "/category/better-sleep-solutions" },
  { label: "Science & Trends", href: "/category/science-trends" },
  { label: "Supplements", href: "/supplements", matchPrefix: "/supplements" },
  { label: "Product Reviews", href: "/category/product-reviews" },
  { label: "Comparisons", href: "/category/comparisons" },
]

export const ABOUT_ITEM: NavItem = { label: "About", href: "/about" }

// ---- Category map used by cards, breadcrumbs, related, etc.
export type CategoryKey =
  | "sleep-guides"
  | "better-sleep-solutions"
  | "science-trends"
  | "supplements"
  | "product-reviews"
  | "comparisons"

export const CATEGORY_MAP: Record<CategoryKey, { title: string; href: string }> = {
  "sleep-guides": { title: "Sleep Guides", href: "/category/sleep-guides" },
  "better-sleep-solutions": { title: "Better Sleep Solutions", href: "/category/better-sleep-solutions" },
  "science-trends": { title: "Science & Trends", href: "/category/science-trends" },
  supplements: { title: "Supplements", href: "/supplements" },
  "product-reviews": { title: "Product Reviews", href: "/category/product-reviews" },
  comparisons: { title: "Comparisons", href: "/category/comparisons" },
}
