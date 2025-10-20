// Server component – no "use client"
type Crumb = { name: string; item: string };

type Props = {
  // Either provide a full canonical path in `url` (e.g. "/blog/slug")
  // or pass a `slug` (e.g. "slug") and we build the canonical.
  url?: string;
  slug?: string;
  title: string;
  description?: string;
  image?: string | { url: string; width?: number; height?: number; alt?: string };
  datePublished?: string | Date;
  dateModified?: string | Date;
  authorName?: string; // backwards compatibility
  author?: string | string[]; // preferred field: string or array of author names
  breadcrumbs?: Crumb[];
};

export default function SeoBlogJsonLd(props: Props) {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

  const toISO = (d?: string | Date) =>
    d ? (d instanceof Date ? d.toISOString() : new Date(d).toISOString()) : undefined;

  // Compute canonical from props.url or props.slug
  const canonicalPath = props.url
    ? props.url
    : props.slug
    ? `/blog/${props.slug.replace(/^\//, "")}`
    : undefined;

  const imageUrl = (() => {
    const raw = typeof props.image === "string" ? props.image : props.image?.url;
    return raw || "/images/cool-bedroom.jpg";
  })();

  const authorField = (() => {
    if (props.author !== undefined) {
      return Array.isArray(props.author)
        ? props.author.map((name) => ({ "@type": "Person", name }))
        : { "@type": "Person", name: props.author };
    }
    if (props.authorName) {
      return { "@type": "Person", name: props.authorName };
    }
    return { "@type": "Organization", name: "SleepAudit.io" };
  })();

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: canonicalPath ? { "@type": "WebPage", "@id": site + canonicalPath } : undefined,
    headline: props.title,
    description: props.description,
    image: imageUrl ? [imageUrl] : undefined,
    author: authorField,
    publisher: {
      "@type": "Organization",
      name: "SleepAudit.io",
      logo: { "@type": "ImageObject", url: site + "/logo.png" },
    },
    datePublished: toISO(props.datePublished),
    dateModified: toISO(props.dateModified ?? props.datePublished),
    url: canonicalPath ? site + canonicalPath : undefined,
  } as Record<string, any>;

  const breadcrumb =
    props.breadcrumbs && props.breadcrumbs.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: props.breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: site + b.item,
          })),
        }
      : null;

  const payload = breadcrumb ? [article, breadcrumb] : [article];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
