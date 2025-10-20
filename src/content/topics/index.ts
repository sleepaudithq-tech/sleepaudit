export type TopicSlug =
  | "sleep-hygiene"
  | "caffeine"
  | "alcohol"
  | "circadian-rhythm"
  | "temperature"
  | "melatonin"
  | "magnesium"
  | "stress"
  | "exercise";

export type TopicDef = {
  slug: TopicSlug;
  title: string;
  description: string;
  // optional future: hero, icon, image, faq, etc.
};

export const TOPICS: Record<TopicSlug, TopicDef> = {
  "sleep-hygiene": {
    slug: "sleep-hygiene",
    title: "Sleep Hygiene",
    description:
      "The day and pre-bed habits that make sleep easy: light, timing, caffeine cutoffs, and wind-down routines.",
  },
  caffeine: {
    slug: "caffeine",
    title: "Caffeine",
    description:
      "How to keep caffeine from wrecking your sleep drive—timing guides, dose, and cutoffs.",
  },
  alcohol: {
    slug: "alcohol",
    title: "Alcohol",
    description:
      "Nightcaps feel relaxing but fragment sleep. Here’s how alcohol really impacts your night.",
  },
  "circadian-rhythm": {
    slug: "circadian-rhythm",
    title: "Circadian Rhythm",
    description:
      "Light, temperature, and timing cues that sync your internal clock for easier sleep.",
  },
  temperature: {
    slug: "temperature",
    title: "Temperature",
    description:
      "Cooling strategies, textiles, and tech to hit that sweet spot for deeper sleep.",
  },
  melatonin: {
    slug: "melatonin",
    title: "Melatonin",
    description:
      "When a tiny dose helps—and when it doesn’t. Protocols, jet lag, and safety notes.",
  },
  magnesium: {
    slug: "magnesium",
    title: "Magnesium",
    description:
      "Forms, doses, and evidence for sleep. What to try first and what to skip.",
  },
  stress: {
    slug: "stress",
    title: "Stress",
    description:
      "Downshift the nervous system: breath, routines, supplements, and behavior patterns.",
  },
  exercise: {
    slug: "exercise",
    title: "Exercise",
    description:
      "Training timing and intensity to improve sleep quality without over-stimulating.",
  },
};

export function getAllTopicSlugs(): TopicSlug[] {
  return Object.keys(TOPICS) as TopicSlug[];
}

export function getTopic(slug: string): TopicDef | null {
  return (TOPICS as Record<string, TopicDef>)[slug] ?? null;
}

