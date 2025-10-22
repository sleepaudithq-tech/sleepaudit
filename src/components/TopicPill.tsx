import Link from "next/link";

export default function TopicPill({ slug, label }: { slug: string; label: string }) {
  return (
    <Link
      href={`/topics/${slug}`}
      className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
    >
      {label}
    </Link>
  );
}

