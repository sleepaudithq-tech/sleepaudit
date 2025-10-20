import type { MetadataRoute } from "next";
import { POSTS } from "@/content/posts";
import { getAllCategorySlugs } from "@/content/categories";
import { getAllTopicSlugs } from "@/content/topics";

function base() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://sleepaudit.io";
}

function toISO(d?: string | Date) {
  return d ? new Date(d).toISOString() : new Date().toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = base();
  const today = new Date().toISOString();

  const postEntries = POSTS.map((p) => {
    const path = p.slug.startsWith("/") ? p.slug : `/blog/${p.slug}`;
    return {
      url: `${baseUrl}${path}`,
      lastModified: toISO(p.date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  const categoryEntries = getAllCategorySlugs().map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const topicEntries = getAllTopicSlugs().map((slug) => ({
    url: `${baseUrl}/topics/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: today, changeFrequency: "daily", priority: 1.0 },
    ...categoryEntries,
    ...topicEntries,
    ...postEntries,
  ];
}

