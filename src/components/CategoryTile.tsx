import Link from "next/link"
import type { Category } from "@/config/categories"

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      aria-label={`Browse ${category.title}`}
      className={[
        "group block rounded-2xl border border-neutral-200 dark:border-neutral-800",
        "p-4 transition hover:shadow-sm hover:bg-neutral-50 hover:dark:bg-neutral-900",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
        "dark:focus-visible:ring-neutral-700 focus-visible:ring-offset-2",
      ].join(" ")}
    >
      <h3 className="text-lg font-semibold underline-offset-4 group-hover:underline">
        {category.title}
      </h3>

      {category.description ? (
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {category.description}
        </p>
      ) : null}
    </Link>
  )
}
