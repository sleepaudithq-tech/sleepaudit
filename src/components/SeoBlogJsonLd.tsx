// Server component – no "use client"
type Crumb = { name: string; item: string };

type Props = {
    url: string;                 // canonical path e.g. "/blog/best-cooling-sheets"
    title: string;
    description?: string;
    image?: string | { url: string; width?: number; height?: number; alt?: string };
    datePublished?: string | Date;
    dateModified?: string | Date;
    authorName?: string;         // backwards compatibility
    author?: string | string[];  // preferred field: string or array of author names
    breadcrumbs?: Crumb[];
};

export default function SeoBlogJsonLd(props: Props) {
    const site =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

    const toISO = (d?: string | Date) =>
        d ? (d instanceof Date ? d.toISOString() : new Date(d).toISOString()) : undefined;

    const imageUrl = typeof props.image === "string" ? props.image : props.image?.url;

    const authorField = (() => {
        if (props.author !== undefined) {
            return Array.isArray(props.author)
                ? props.author.map((name) => ({ "@type": "Person", name }))
                : { "@type": "Person", name: props.author };
        }
        if (props.authorName) {
            return { "@type": "Person", name: props.authorName };
        }
        return undefined;
    })();

    const article = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: { "@type": "WebPage", "@id": site + props.url },
        headline: props.title,
        description: props.description,
        image: imageUrl ? [imageUrl] : undefined,
        author: authorField,
        datePublished: toISO(props.datePublished),
        dateModified: toISO(props.dateModified ?? props.datePublished),
    };

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
