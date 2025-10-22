"use client";
import Head from "next/head";

export default function SeoCollectionJsonLd({
  title,
  description,
  urlPath,
  items,
}: {
  title: string;
  description: string;
  urlPath: string;
  items: { title: string; url: string }[];
}) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://sleepaudit.io";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${base}${urlPath}`,
    hasPart: items.map((i) => ({
      "@type": "BlogPosting",
      headline: i.title,
      url: i.url.startsWith("http") ? i.url : `${base}${i.url}`,
    })),
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}

