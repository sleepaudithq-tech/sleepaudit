"use client";

import RelatedTopics from "@/components/posts/RelatedTopics";
import PopularInCategory from "@/components/posts/PopularInCategory";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { usePathname } from "next/navigation";
import { POSTS } from "@/content/posts";

export default function PostAutoFooter() {
  const pathname = (usePathname() || "").replace(/\/$/, "");

  // Only attach on blog article routes
  if (!pathname.startsWith("/blog/")) return null;

  const post = (POSTS as any[]).find((p) => p.slug === pathname);
  if (!post) return null;

  return (
    <div className="mt-12">
      <RelatedTopics tags={post?.metadata?.tags} />
      <PopularInCategory categoryKey={post?.category || post?.categoryKey} excludeSlug={post?.slug} />
      {post?.affiliate ? <AffiliateDisclosure /> : null}
    </div>
  );
}
