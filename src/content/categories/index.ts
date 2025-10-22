export type CategorySlug =
  | "sleep-guides"
  | "better-sleep-solutions"
  | "supplements"
  | "product-reviews"
  | "comparisons"
  | "science-trends"; // "about" is a standalone page, not a listing

export type CategoryDef = {
  slug: CategorySlug;
  title: string;
  description: string;
  // optional future: icon, image, hero, etc.
  subcategories?: { slug: string; title: string; description: string }[];
};

export const CATEGORIES: Record<CategorySlug, CategoryDef> = {
  "sleep-guides": {
    slug: "sleep-guides",
    title: "Sleep Guides",
    description:
      "Foundational, how-to guides to fix the basics: routines, sleep drive, circadian alignment, and better habits.",
  },
  "better-sleep-solutions": {
    slug: "better-sleep-solutions",
    title: "Better Sleep Solutions",
    description:
      "Practical levers that move your sleep: caffeine timing, alcohol, light, temperature, stress, and routines.",
    subcategories: [
      {
        slug: "cooling",
        title: "Cooling Hub",
        description:
          "Your command center for sleeping cooler: tech, textiles, and temperature tactics—all in one place.",
      },
    ],
  },
  supplements: {
    slug: "supplements",
    title: "Supplements",
    description:
      "Evidence-based overview of individual compounds, stacks, and protocols—what helps, what doesn’t.",
  },
  "product-reviews": {
    slug: "product-reviews",
    title: "Product Reviews",
    description:
      "Hands-on tests of mattresses, pillows, cooling pads, sheets, trackers, and more—what’s actually worth it.",
  },
  comparisons: {
    slug: "comparisons",
    title: "Comparisons",
    description:
      "A vs. B breakdowns: which option fits your needs, budget, and sleep style—with clear pros/cons.",
  },
  "science-trends": {
    slug: "science-trends",
    title: "Science & Trends",
    description:
      "New studies translated into plain English, plus myth-busting and industry trends that matter.",
  },
};

export function getAllCategorySlugs(): CategorySlug[] {
  return Object.keys(CATEGORIES) as CategorySlug[];
}

export function getCategory(slug: string): CategoryDef | null {
  return (CATEGORIES as Record<string, CategoryDef>)[slug] ?? null;
}
