// src/components/Breadcrumbs.tsx
"use client";

import React from "react";
import Link from "next/link";

type Crumb = {
    label: string;
    href?: string; // omit on the current page
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
    const siteUrl =
        (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.label,
            ...(item.href
                ? { item: `${siteUrl}${item.href.startsWith("/") ? item.href : `/${item.href}`}` }
                : {}),
        })),
    };

    return (
        <>
            {/* SEO: BreadcrumbList JSON-LD */}
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Visible Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
                    {items.map((item, idx) => {
                        const isLast = idx === items.length - 1;
                        return (
                            <li key={`${item.label}-${idx}`} className="flex items-center">
                                {item.href && !isLast ? (
                                    <Link
                                        href={item.href}
                                        className="hover:text-neutral-200 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span aria-current={isLast ? "page" : undefined} className="text-neutral-300">
                                        {item.label}
                                    </span>
                                )}
                                {!isLast && <span className="mx-2 text-neutral-600">/</span>}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
