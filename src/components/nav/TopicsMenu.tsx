"use client";

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

export default function TopicsMenu() {
  return (
    <div className="group relative">
      <button className="inline-flex h-9 items-center gap-1 px-2 text-sm whitespace-nowrap text-neutral-300 hover:text-neutral-100">
        Topics
        <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden className="opacity-70">
          <path d="M5 7l5 6 5-6H5z" fill="currentColor" />
        </svg>
      </button>
      <div className="invisible absolute left-0 z-50 mt-2 w-64 translate-y-2 rounded-2xl border border-neutral-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-900">
        <ul className="grid grid-cols-1 gap-1">
          {FEATURED.map((slug) => {
            const t = TOPICS[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/topics/${t.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  {t.title}
                </Link>
              </li>
            );
          })}
          <li className="mt-1 border-t border-neutral-200 pt-1 text-center text-xs text-neutral-500 dark:border-neutral-800">
            <Link href="/topics/sleep-hygiene" className="hover:underline">
              Explore all topics →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
