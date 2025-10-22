// src/components/posts/RelatedTopics.tsx
import Link from "next/link";
import { TOPICS } from "@/content/topics";

export default function RelatedTopics({ tags }: { tags?: string[] }) {
  const normalized = (tags ?? []).map((t) => t.toLowerCase());
  const items = normalized
    .map((slug) => TOPICS[slug as keyof typeof TOPICS])
    .filter(Boolean);

  if (!items.length) return null;

  return (
    <section className="mt-10">
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-neutral-400">
        RELATED TOPICS
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <Link
            key={t.slug}
            href={`/topics/${t.slug}`}
            className="inline-flex items-center rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-900"
          >
            {t.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

