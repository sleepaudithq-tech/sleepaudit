// src/components/home/CategoryLatestRail.tsx
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/content/categories";
import { getLatestByCategory } from "@/content/posts";

export default function CategoryLatestRail({
  categoryKey,
  limit = 3,
}: {
  categoryKey: keyof typeof CATEGORIES | string;
  limit?: number;
}) {
  const cat = CATEGORIES[categoryKey as keyof typeof CATEGORIES];
  if (!cat) return null;
  const posts = getLatestByCategory(cat.slug, limit);
  if (!posts.length) return null;

  return (
    <section className="mt-10">
      <div className="mb-3 flex items-end justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-neutral-400">
          LATEST IN {cat.title.toUpperCase()}
        </h3>
        <Link href={`/category/${cat.slug}`} className="text-xs text-neutral-400 hover:underline">
          See all →
        </Link>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {posts.map((p) => {
          const img = p.hero?.src || p.image || p.coverImage || "/images/cool-bedroom.jpg";
          const alt = p.hero?.alt || p.title || "Cover";
          const href = p.slug.startsWith("/") ? p.slug : `/blog/${p.slug}`;
          return (
            <li key={p.slug} className="overflow-hidden rounded-2xl border border-neutral-800">
              <Link href={href} className="block">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={img} alt={alt} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-3">
                  <h4 className="line-clamp-2 text-sm font-medium">{p.title}</h4>
                  {p.excerpt ? (
                    <p className="mt-1 line-clamp-2 text-xs text-neutral-400">{p.excerpt}</p>
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

