"use client"

import Link from "next/link"
import Script from "next/script"
import { CATEGORY_MAP, type CategoryKey } from "@/config/categories"

type Props = {
  category: CategoryKey
  title: string
  slug: string // absolute path starting with "/"
}

export default function Breadcrumbs({ category, title, slug }: Props) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io"
  const cat = CATEGORY_MAP[category]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cat.title,
        item: site + cat.href,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: site + slug,
      },
    ],
  }

  return (
    <nav aria-label="Breadcrumb" className="not-prose mb-4 text-sm text-neutral-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
        </li>
        <li aria-hidden="true">&rsaquo;</li>
        <li>
          <Link href={cat.href} className="hover:underline underline-offset-4">
            {cat.title}
          </Link>
        </li>
        <li aria-hidden="true">&rsaquo;</li>
        <li className="text-neutral-500" aria-current="page">
          {title}
        </li>
      </ol>

      {/* SEO: BreadcrumbList JSON-LD */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  )
}
