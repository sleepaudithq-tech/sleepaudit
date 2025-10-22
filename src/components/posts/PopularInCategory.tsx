// src/components/posts/PopularInCategory.tsx
import Link from "next/link";
import Image from "next/image";
import { POSTS } from "@/content/posts";
import { CATEGORIES } from "@/content/categories";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string | Date;
  hero?: { src: string; alt?: string };
  image?: string;
  coverImage?: string;
  category?: string;
  categoryKey?: string;
};

function toDate(d?: string | Date) {
  return d ? new Date(d) : new Date(0);
}

export default function PopularInCategory({
  categoryKey,
  excludeSlug,
  limit = 4,
}: {
  categoryKey?: string;
  excludeSlug?: string;
  limit?: number;
}) {
  if (!categoryKey) return null;

  const cat = CATEGORIES[categoryKey as keyof typeof CATEGORIES];

  const normExcludeA = excludeSlug || "";
  const normExcludeB = excludeSlug?.startsWith("/") ? excludeSlug : excludeSlug ? `/blog/${excludeSlug}` : "";

  const posts = (POSTS as Post[])
    .filter(
      (p) => ((p.categoryKey as string) === categoryKey || (p.category as string) === categoryKey) &&
        p.slug !== normExcludeA &&
        p.slug !== normExcludeB
    )
    .sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime())
    .slice(0, limit);

  if (!posts.length) return null;

  return (
    <section className="mt-12">
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-neutral-400">
        POPULAR IN {cat?.title?.toUpperCase() ?? "THIS CATEGORY"}
      </h3>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map((p) => {
          const img = p.hero?.src || p.image || p.coverImage || "/images/cool-bedroom.jpg";
          const alt = p.hero?.alt || p.title || "Cover";
          const href = p.slug.startsWith("/") ? p.slug : `/blog/${p.slug}`;
          return (
            <li key={p.slug} className="overflow-hidden rounded-2xl border border-neutral-800">
              <Link href={href} className="grid grid-cols-3 gap-0">
                <div className="relative col-span-1 aspect-[16/10]">
                  <Image src={img} alt={alt} fill className="object-cover" sizes="180px" />
                </div>
                <div className="col-span-2 p-3">
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

