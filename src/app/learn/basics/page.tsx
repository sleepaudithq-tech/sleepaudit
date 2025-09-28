// src/app/guides/basics/page.tsx
import type { Metadata } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
const pageUrl = `${siteUrl}/learn/basics`;
const ogImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
    title: "Sleep Basics & Science",
    description:
        "Foundations of great sleep: stages, REM vs deep sleep, circadian rhythm, and how sleep impacts your brain and body.",
    alternates: { canonical: "/learn/basics" },
    openGraph: {
        type: "website",
        title: "Sleep Basics & Science • SleepAudit.io",
        description:
            "Foundations of great sleep: stages, REM vs deep sleep, circadian rhythm, and how sleep impacts your brain and body.",
        url: pageUrl,
        images: [{ url: ogImage, width: 1200, height: 630, alt: "SleepAudit" }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
};

function Card({
    href,
    title,
    summary,
    tag = "Guide",
}: {
    href: string;
    title: string;
    summary: string;
    tag?: string;
}) {
    return (
        <a
            href={href}
            className="group block rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition p-5"
        >
            <div className="mb-2 text-xs uppercase tracking-wide text-neutral-400">{tag}</div>
            <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
            <p className="mt-2 text-neutral-400">{summary}</p>
            <div className="mt-4 text-sm text-neutral-300">Read more →</div>
        </a>
    );
}

export default function BasicsCategoryPage() {
    // Forward-thinking: these can eventually be generated from MDX frontmatter.
    const featured = [
        {
            href: "/learn/basics/what-is-sleep",
            title: "What Is Sleep?",
            summary:
                "A clear, practical breakdown of what sleep is from a biological and behavioral perspective.",
            tag: "Foundations",
        },
        {
            href: "/blog/why-we-sleep",
            title: "Why Do We Sleep?",
            summary:
                "From memory consolidation to metabolic cleanup: the leading theories and what evidence says.",
            tag: "Foundations",
        },
    ];

    const fundamentals = [
        {
            href: "/blog/stages-of-sleep",
            title: "The Stages of Sleep Explained",
            summary:
                "NREM stages 1–3 and REM: what happens in each stage, and why cycling matters.",
            tag: "Foundations",
        },
        {
            href: "/blog/rem-vs-deep-sleep",
            title: "REM vs Deep Sleep: Why Both Matter",
            summary:
                "Cognition vs restoration: how to think about balancing REM and slow-wave sleep.",
            tag: "Foundations",
        },
        {
            href: "/blog/circadian-rhythm-basics",
            title: "Circadian Rhythm Basics",
            summary:
                "Light, timing, and temperature: the core levers that set your body clock.",
            tag: "Foundations",
        },
        {
            href: "/blog/sleep-and-brain-body",
            title: "How Sleep Affects the Brain and Body",
            summary:
                "Neuroplasticity, hormones, immune function, and long-term health outcomes.",
            tag: "Research",
        },
    ];

    return (
        <>
            {/* BreadcrumbList JSON-LD (SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Learn", item: `${siteUrl}/learn` },
                            { "@type": "ListItem", position: 2, name: "Sleep Basics & Science", item: pageUrl },
                        ],
                    }),
                }}
            />

            <main className="mx-auto max-w-5xl px-4 py-12">
                {/* Hero */}
                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Sleep Basics & Science</h1>
                    <p className="mt-3 max-w-3xl text-neutral-400">
                        The foundations of great sleep, explained clearly. Start here to understand stages,
                        circadian rhythm, and how sleep drives brain and body performance. Start with our{' '}
                        <a href="/blog/circadian-rhythms" className="underline hover:text-neutral-200">
                            Circadian Rhythms guide
                        </a>{' '}
                        to anchor your timing.
                    </p>
                </header>

                {/* Mini TOC */}
                <nav aria-label="On this page" className="mb-8">
                    <ul className="flex flex-wrap gap-2 text-sm">
                        <li>
                            <a href="#featured" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Featured
                            </a>
                        </li>
                        <li>
                            <a href="#fundamentals" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Fundamentals
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Featured */}
                <section id="featured" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Featured</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {featured.map((p) => (
                            <Card key={p.href} {...p} tag="Starter" />
                        ))}
                    </div>
                </section>

                {/* Fundamentals */}
                <section id="fundamentals" className="mb-16">
                    <h2 className="mb-4 text-2xl font-semibold">Fundamentals</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {fundamentals.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                {/* Guidance note (optional, easy to remove later) */}
                <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-400">
                    New here? Read a "Starter" guide first, then explore fundamentals based on your goals.
                </aside>
            </main>
        </>
    );
}
