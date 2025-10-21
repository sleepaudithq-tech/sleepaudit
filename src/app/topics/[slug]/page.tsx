import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { TOPICS, getAllTopicSlugs, getTopic } from "@/content/topics";
import { POSTS } from "@/content/posts";
import SeoCollectionJsonLd from "@/components/SeoCollectionJsonLd";

type PostRecord = {
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  date?: string | Date;
  hero?: { src: string; alt?: string };
  image?: string;
  coverImage?: string;
  metadata?: {
    tags?: string[];
  };
  categoryKey?: string;
};

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  return "";
}

export async function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

type PageParamsPromise = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageParamsPromise): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};

  const title = `${topic.title} | Topics | SleepAudit.io`;
  const description = topic.description;
  const base = getBaseUrl();
  const url = base ? `${base}/topics/${topic.slug}` : `/topics/${topic.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TopicPage({ params }: PageParamsPromise) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const tag = topic.slug; // must match posts' metadata.tags values

  const posts = (POSTS as PostRecord[]).filter((p) =>
    (p.metadata?.tags ?? []).map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SeoCollectionJsonLd
        title={topic.title}
        description={topic.description}
        urlPath={`/topics/${topic.slug}`}
        items={posts.map((p) => ({
          title: p.title,
          url: p.slug.startsWith("/") ? p.slug : `/blog/${p.slug}`,
        }))}
      />
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{topic.title}</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{topic.description}</p>
        <p className="mt-1 text-sm text-neutral-500">
          {posts.length} {posts.length === 1 ? "article" : "articles"}
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 p-8 dark:border-neutral-800">
          <p className="text-neutral-600 dark:text-neutral-400">
            We’re writing up resources for this topic. Check back soon.
          </p>
        </div>
      ) : (
        <section
          aria-label={`Posts tagged ${topic.title}`}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      )}
    </main>
  );
}

function PostCard({ post }: { post: PostRecord }) {
  const href = post.slug.startsWith("/") ? post.slug : `/blog/${post.slug}`;
  const img = post?.hero?.src || post?.image || post?.coverImage || "/images/cool-bedroom.jpg";
  const alt = post?.hero?.alt || post?.title || "Post cover";
  const excerpt = post.excerpt || post.description || "";
  const date = post.date
    ? new Date(post.date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 transition hover:shadow-md dark:border-neutral-800">
      <Link href={href} className="block">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>
        <div className="space-y-2 p-4">
          <h2 className="line-clamp-2 text-lg font-medium leading-snug">{post.title}</h2>
          {excerpt ? (
            <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">{excerpt}</p>
          ) : null}
          <div className="pt-1 text-xs text-neutral-500">{date}</div>
        </div>
      </Link>
    </article>
  );
}
