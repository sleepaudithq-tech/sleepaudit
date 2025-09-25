// src/app/learn/audience/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
const pageUrl = `${siteUrl}/learn/audience`;
const ogImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
    title: "Audience-Specific Sleep Guides",
    description:
        "Targeted sleep advice for hot sleepers, menopause, shift workers, students, athletes, and travelers.",
    alternates: { canonical: "/learn/audience" },
    openGraph: {
        type: "website",
        title: "Audience-Specific Sleep Guides • SleepAudit.io",
        description:
            "Targeted sleep advice for hot sleepers, menopause, shift workers, students, athletes, and travelers.",
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

export default function AudienceCategoryPage() {
    const featured = [
        {
            href: "/blog/sleep-tips-for-hot-sleepers",
            title: "Sleep Tips for Hot Sleepers",
            summary:
                "Foundational strategies for thermal comfort at night—airflow, fabrics, and timing.",
            tag: "Foundations" as const,
        },
        {
            href: "/blog/sleep-during-menopause",
            title: "Sleeping Better During Menopause",
            summary:
                "Hot flashes, awakenings, and practical adjustments that ease night symptoms.",
            tag: "Guidance" as const,
        },
    ];

    const workersAndStudents = [
        {
            href: "/blog/shift-work-sleep-reset",
            title: "Shift Workers: Reset Your Rhythm",
            summary:
                "Light timing, sleep anchors, and split-sleep strategies for rotating or night shifts.",
            tag: "Guidance" as const,
        },
        {
            href: "/blog/student-sleep-best-practices",
            title: "Best Practices for Student Sleep",
            summary:
                "Study timing, caffeine boundaries, and screens—making recovery work with busy schedules.",
            tag: "Guidance" as const,
        },
    ];

    const performanceAndTravel = [
        {
            href: "/blog/athlete-sleep-and-recovery",
            title: "Athletes & Recovery: Optimizing Sleep",
            summary:
                "Training load, temperature, and pre-sleep routines that improve adaptation.",
            tag: "Foundations" as const,
        },
        {
            href: "/blog/travel-sleep-strategies",
            title: "Travelers: Sleep Better on the Road",
            summary:
                "Jet lag basics, light exposure plans, and practical hotel room adjustments.",
            tag: "Guidance" as const,
        },
        {
            href: "/blog/melatonin-jet-lag-research",
            title: "Melatonin & Jet Lag: What Research Says",
            summary:
                "Dosing ranges, timing by direction of travel, and realistic expectations.",
            tag: "Research" as const,
        },
    ];

    return (
        <>
            <main className="mx-auto max-w-5xl px-4 py-12">
                <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Audience-Specific Sleep Guides" }]} />

                {/* Hero */}
                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Audience-Specific Sleep Guides</h1>
                    <p className="mt-3 max-w-3xl text-neutral-400">
                        Practical, tailored advice for different contexts and life stages. Start with a
                        Foundations piece, then follow the Guidance or Research links for deeper detail.
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
                            <a href="#workers-students" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Workers & Students
                            </a>
                        </li>
                        <li>
                            <a href="#performance-travel" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Performance & Travel
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Featured */}
                <section id="featured" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Featured</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {featured.map((p) => <Card key={p.href} {...p} />)}
                    </div>
                </section>

                {/* Workers & Students */}
                <section id="workers-students" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Workers & Students</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {workersAndStudents.map((p) => <Card key={p.href} {...p} />)}
                    </div>
                </section>

                {/* Performance & Travel */}
                <section id="performance-travel" className="mb-16">
                    <h2 className="mb-4 text-2xl font-semibold">Performance & Travel</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {performanceAndTravel.map((p) => <Card key={p.href} {...p} />)}
                    </div>
                </section>

                <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-400">
                    Use the Learn hubs as your map. Each audience page links out to focused articles you can
                    read in any order.
                </aside>
            </main>
        </>
    );
}
