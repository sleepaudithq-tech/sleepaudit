// src/components/home/ExploreTopics.tsx
import Link from "next/link";
import { TOPICS } from "@/content/topics";

const FEATURED: Array<keyof typeof TOPICS> = [
  "sleep-hygiene",
  "caffeine",
  "alcohol",
  "magnesium",
  "temperature",
  "circadian-rhythm",
];

export default function ExploreTopics() {
  return (
    <section className="mt-12 rounded-2xl border border-neutral-800 p-5">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold">Explore Topics</h2>
          <p className="mt-1 text-sm text-neutral-400">
            Cross-cut hubs that bundle guides across categories.
          </p>
        </div>
        <Link href="/topics/sleep-hygiene" className="text-sm text-neutral-300 hover:underline">
          View all →
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {FEATURED.map((slug) => {
          const t = TOPICS[slug];
          return (
            <li key={t.slug}>
              <Link
                href={`/topics/${t.slug}`}
                className="block rounded-xl border border-neutral-800 px-3 py-3 text-sm hover:bg-neutral-900"
              >
                {t.title}
                <div className="mt-1 text-xs text-neutral-500 line-clamp-2">{t.description}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

