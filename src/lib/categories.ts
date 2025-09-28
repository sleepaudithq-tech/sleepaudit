export type Category = {
    slug: string
    title: string
    description: string
}

export const CATEGORIES: Category[] = [
    {
        slug: "sleep-guides",
        title: "Sleep Guides",
        description:
            "Plain-English guides to core sleep concepts—stages, circadian rhythm, sleep pressure—and how to apply them for better nights.",
    },
    {
        slug: "product-reviews",
        title: "Product Reviews",
        description:
            "Evidence-based reviews of mattresses, pillows, sheets, blackout curtains, and sleep tech—what actually helps and what doesn't.",
    },
    {
        slug: "comparisons",
        title: "Comparisons",
        description:
            "Head-to-head breakdowns (e.g., latex vs memory foam, white noise vs pink noise) with pros/cons and who each option fits best.",
    },
    {
        slug: "science-trends",
        title: "Science & Trends",
        description:
            "New research, blue-light debates, cooling science, and the evolving tech shaping how we sleep in the modern world.",
    },
    {
        slug: "better-sleep-solutions",
        title: "Better Sleep Solutions",
        description:
            "Practical fixes for real problems: hot sleeping, snoring, jet lag, shift work, stress wake-ups—step-by-step, testable solutions.",
    },
]

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map(c => [c.slug, c]))
