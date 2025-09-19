// src/app/guides/disorders/page.tsx
import type { Metadata } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
const pageUrl = `${siteUrl}/learn/disorders`;
const ogImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
    title: "Sleep Disorders & Challenges",
    description:
        "Understand insomnia, sleep apnea, nightmares vs night terrors, restless legs, and jet lag—clear explanations and practical next steps.",
    alternates: { canonical: "/learn/disorders" },
    openGraph: {
        type: "website",
        title: "Sleep Disorders & Challenges • SleepAudit.io",
        description:
            "Understand insomnia, sleep apnea, nightmares vs night terrors, restless legs, and jet lag—clear explanations and practical next steps.",
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

export default function DisordersCategoryPage() {
    const common = [
        {
            href: "/blog/insomnia-overview",
            title: "Insomnia: Types, Causes, Treatments",
            summary:
                "Onset vs maintenance insomnia, behavioral approaches (CBT-I), and when to seek medical care.",
        },
        {
            href: "/blog/sleep-apnea-basics",
            title: "Sleep Apnea: Symptoms, Causes, Solutions",
            summary:
                "How to recognize apnea, why CPAP helps, and simple steps that support treatment.",
        },
        {
            href: "/blog/nightmares-vs-night-terrors",
            title: "Nightmares vs Night Terrors",
            summary:
                "Key differences, triggers, and evidence-based management strategies for each.",
        },
        {
            href: "/blog/restless-legs-syndrome",
            title: "Restless Legs Syndrome Explained",
            summary:
                "What RLS feels like, common drivers, and practical relief strategies to discuss with your clinician.",
        },
        {
            href: "/blog/jet-lag-recovery",
            title: "Travel & Jet Lag: Sleep Better Abroad",
            summary:
                "Planning light, timing sleep, and caffeine use to shorten adjustment time across time zones.",
        },
    ];

    const action = [
        {
            href: "/blog/cbt-i-basics",
            title: "CBT-I Basics",
            summary:
                "Sleep restriction, stimulus control, and cognitive tools—the backbone of non-drug insomnia care.",
            tag: "Action",
        },
        {
            href: "/blog/sleep-diaries-how-to",
            title: "How to Use a Sleep Diary",
            summary:
                "Track the right signals: sleep latency, awakenings, efficiency—so you can see what's working.",
            tag: "Action",
        },
        {
            href: "/blog/when-to-see-a-sleep-specialist",
            title: "When to See a Sleep Specialist",
            summary:
                "Red flags, referral types, and what to expect from a sleep study or home test.",
            tag: "Action",
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
                            { "@type": "ListItem", position: 2, name: "Sleep Disorders & Challenges", item: pageUrl },
                        ],
                    }),
                }}
            />

            <main className="mx-auto max-w-5xl px-4 py-12">
                {/* Hero */}
                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Sleep Disorders & Challenges</h1>
                    <p className="mt-3 max-w-3xl text-neutral-400">
                        Clear explanations and practical next steps for common problems—start here, then follow
                        the action guides to make measurable progress.
                    </p>
                </header>

                {/* Mini TOC */}
                <nav aria-label="On this page" className="mb-8">
                    <ul className="flex flex-wrap gap-2 text-sm">
                        <li>
                            <a href="#common" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Common Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#action" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Action Guides
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Common Conditions */}
                <section id="common" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Common Conditions</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {common.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                {/* Action Guides */}
                <section id="action" className="mb-16">
                    <h2 className="mb-4 text-2xl font-semibold">Action Guides</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {action.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                {/* Help note */}
                <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-400">
                    If symptoms are severe or persistent, consult your clinician or a board-certified sleep specialist.
                </aside>
            </main>
        </>
    );
}
