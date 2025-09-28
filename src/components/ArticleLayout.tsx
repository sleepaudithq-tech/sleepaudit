// src/components/ArticleLayout.tsx
import * as React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd";

type Crumb = { label: string; href?: string };

export default function ArticleLayout({
    title,
    description,
    author = "SleepAudit Team",
    datePublished,
    dateModified,
    categories = [],
    cover, // { src, alt }
    breadcrumbs, // e.g., [{label:"Learn",href:"/learn"},{label:"Sleep Basics & Science",href:"/learn/basics"},{label:title}]
    url, // absolute canonical URL for JSON-LD (optional but recommended)
    children,
    showJsonLd = true,
    readingTime, // e.g., "7 min read" (optional)
}: {
    title: string;
    description?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
    categories?: string[];
    cover?: { src: string; alt?: string };
    breadcrumbs?: Crumb[];
    url?: string; // pass `${siteUrl}/learn/...`
    showJsonLd?: boolean;
    readingTime?: string;
    children: React.ReactNode;
}) {
    const fmt = (d?: string) =>
        d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" }) : undefined;

    const siteUrl =
        (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
    const ogImage = `${siteUrl}/images/og-default.jpg`;

    return (
        <article className="mx-auto max-w-3xl px-4 py-10">
            {/* Optional SEO JSON-LD */}
            {showJsonLd && url && datePublished && (
                <SeoBlogJsonLd
                    url={url}
                    title={title}
                    description={description ?? ""}
                    datePublished={datePublished}
                    dateModified={dateModified}
                    author={author}
                    image={cover?.src ?? ogImage}
                />
            )}

            {/* Optional breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 ? (
                <Breadcrumbs items={breadcrumbs} />
            ) : null}

            {/* Title & Dek */}
            <header className="mb-6">
                <h1 className="text-4xl font-bold leading-tight tracking-tight">{title}</h1>
                {description ? (
                    <p className="mt-3 text-lg text-neutral-300">{description}</p>
                ) : null}

                {/* Meta row */}
                {(author || datePublished || readingTime || categories.length > 0) && (
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-400">
                        {author && <span>By {author}</span>}
                        {datePublished && <span>• {fmt(datePublished)}</span>}
                        {readingTime && <span>• {readingTime}</span>}
                        {categories.length > 0 && (
                            <span className="flex flex-wrap gap-2">
                                {categories.map((c) => (
                                    <span
                                        key={c}
                                        className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300"
                                    >
                                        {c}
                                    </span>
                                ))}
                            </span>
                        )}
                    </div>
                )}
            </header>

            {/* Hero */}
            {cover?.src ? (
                <img
                    src={cover.src}
                    alt={cover.alt ?? ""}
                    className="mb-8 w-full rounded-xl border border-neutral-800"
                />
            ) : null}

            {/* Content */}
            <div className="space-y-4">
                {children}
            </div>

            {/* Footer divider */}
            <hr className="my-10 border-neutral-800" />
            <p className="text-sm text-neutral-500">
                SleepAudit.io — evidence-first sleep education. This page was last updated
                {dateModified ? ` ${fmt(dateModified)}` : datePublished ? ` ${fmt(datePublished)}` : ""}.
            </p>
        </article>
    );
}
