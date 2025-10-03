// src/app/learn/supplements/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
const pageUrl = `${siteUrl}/learn/supplements`;
const ogImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
    title: "Supplements & Natural Remedies",
    description:
        "Evidence-first look at magnesium, melatonin, L-theanine, glycine, valerian, chamomile, and more—forms, dosing, safety, and what studies say.",
    alternates: { canonical: "/learn/supplements" },
    openGraph: {
        type: "website",
        title: "Supplements & Natural Remedies • SleepAudit.io",
        description:
            "Evidence-first look at magnesium, melatonin, L-theanine, glycine, valerian, chamomile, and more—forms, dosing, safety, and what studies say.",
        url: pageUrl,
        images: [{ url: ogImage, width: 1200, height: 630, alt: "SleepAudit" }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
};

function Card({
    href,
    title,
    summary,
    tag,
}: {
    href: string;
    title: string;
    summary: string;
    tag?: "Foundations" | "Guidance" | "Research";
}) {
    return (
        <a
            href={href}
            className="group block rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition p-5"
        >
            {tag && (
                <div className="mb-2 text-xs uppercase tracking-wide text-neutral-400">{tag}</div>
            )}
            <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
            <p className="mt-2 text-neutral-400">{summary}</p>
            <div className="mt-4 text-sm text-neutral-300">Read more →</div>
        </a>
    );
}

export default function SupplementsCategoryPage() {
    const foundations = [
        {
            href: "/supplements/magnesium-for-sleep",
            title: "Magnesium for Sleep: Does It Work?",
            summary:
                "Glycinate vs citrate vs oxide, realistic dosing, timing, and the quality of evidence.",
            tag: "Foundations" as const,
        },
        {
            href: "/blog/melatonin-pros-cons",
            title: "Melatonin: Pros, Cons, and Safe Use",
            summary:
                "Where melatonin helps (and where it doesn't), micro-dosing, timing, and safety.",
            tag: "Foundations" as const,
        },
    ];

    const research = [
        {
            href: "/blog/l-theanine-and-sleep",
            title: "L-Theanine and Sleep",
            summary:
                "Mechanisms, synergy with caffeine, and what studies suggest about sleep quality.",
            tag: "Research" as const,
        },
        {
            href: "/blog/glycine-for-sleep",
            title: "Glycine for Sleep",
            summary:
                "Body-temp reduction pathway, dosing ranges, and safety considerations.",
            tag: "Research" as const,
        },
        {
            href: "/blog/valerian-evidence",
            title: "Valerian: What the Evidence Says",
            summary:
                "Mixed results, formulation variability, and how to interpret trials.",
            tag: "Research" as const,
        },
        {
            href: "/blog/chamomile-tea-and-sleep",
            title: "Chamomile Tea & Relaxation",
            summary:
                "Apigenin, mild anxiolytic effects, and practical expectations for sleep.",
            tag: "Research" as const,
        },
    ];

    const guidance = [
        {
            href: "/blog/supplement-safety-basics",
            title: "Supplement Safety Basics",
            summary:
                "Quality, third-party testing, medication interactions, and when to talk to your clinician.",
            tag: "Guidance" as const,
        },
        {
            href: "/blog/supplement-stacking-sleep",
            title: "Stacking Supplements (Safely) for Sleep",
            summary:
                "Simple, conservative stacks and timing that minimize risk and maximize signal.",
            tag: "Guidance" as const,
        },
    ];

    return (
        <>
            <main className="mx-auto max-w-5xl px-4 py-12">
                <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Supplements & Natural Remedies" }]} />

                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Supplements & Natural Remedies</h1>
                    <p className="mt-3 max-w-3xl text-neutral-400">
                        We start with evidence, then give you practical expectations. Learn what works, how to dose,
                        and when to avoid supplements entirely.
                    </p>
                </header>

                <nav aria-label="On this page" className="mb-8">
                    <ul className="flex flex-wrap gap-2 text-sm">
                        <li>
                            <a href="#foundations" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Foundations
                            </a>
                        </li>
                        <li>
                            <a href="#research" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Research
                            </a>
                        </li>
                        <li>
                            <a href="#guidance" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Guidance
                            </a>
                        </li>
                    </ul>
                </nav>

                <section id="foundations" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Foundations</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {foundations.map((p) => <Card key={p.href} {...p} />)}
                    </div>
                </section>

                <section id="research" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Research</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {research.map((p) => <Card key={p.href} {...p} />)}
                    </div>
                </section>

                <section id="guidance" className="mb-16">
                    <h2 className="mb-4 text-2xl font-semibold">Guidance</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {guidance.map((p) => <Card key={p.href} {...p} />)}
                    </div>
                </section>

                <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-400">
                    Reminder: supplements aren't a fix for untreated sleep apnea or circadian misalignment. Start with
                    behavior and environment; layer supplements carefully if needed.
                </aside>
            </main>
        </>
    );
}
