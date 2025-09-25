// src/app/guides/habits/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
const pageUrl = `${siteUrl}/learn/habits`;
const ogImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
    title: "Sleep Habits & Lifestyle",
    description:
        "Sleep hygiene, routines, caffeine timing, naps, exercise, and day-to-day choices that improve your sleep.",
    alternates: { canonical: "/learn/habits" },
    openGraph: {
        type: "website",
        title: "Sleep Habits & Lifestyle • SleepAudit.io",
        description:
            "Sleep hygiene, routines, caffeine timing, naps, exercise, and day-to-day choices that improve your sleep.",
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

export default function HabitsCategoryPage() {
    const coreHabits = [
        {
            href: "/blog/sleep-hygiene-basics",
            title: "What Is Sleep Hygiene (and Why It Matters)",
            summary:
                "A simple framework for consistent, higher-quality sleep—light, timing, and environment.",
            tag: "Foundations",
        },
        {
            href: "/blog/bedtime-routine",
            title: "Bedtime Routines for Better Sleep",
            summary:
                "Wind-down sequences that actually stick: timing, light control, and mental off-ramps.",
            tag: "Guidance",
        },
        {
            href: "/blog/are-naps-good-or-bad",
            title: "Are Naps Helpful or Harmful?",
            summary:
                "When naps help performance—and when they disrupt night sleep. Ideal length and timing.",
            tag: "Research",
        },
    ];

    const timingAndStimulants = [
        {
            href: "/blog/caffeine-cutoff",
            title: "Caffeine vs Sleep: How Long Before Bed?",
            summary:
                "Half-life, sensitivity, and practical cutoffs for coffee, tea, and energy drinks.",
            tag: "Research",
        },
        {
            href: "/blog/alcohol-and-sleep",
            title: "Alcohol and Sleep Quality",
            summary:
                "Why alcohol fragments sleep and how to minimize impact on REM and recovery.",
            tag: "Research",
        },
        {
            href: "/blog/exercise-timing-sleep",
            title: "Can Exercise Timing Affect Sleep?",
            summary:
                "Morning vs evening workouts and their effects on body temperature and sleep latency.",
            tag: "Research",
        },
    ];

    const lifestyle = [
        {
            href: "/blog/stress-anxiety-and-sleep",
            title: "Stress, Anxiety, and Sleep",
            summary:
                "Practical decompression tactics: journaling, breathing, and cognitive wind-down tools.",
            tag: "Guidance",
        },
        {
            href: "/blog/evening-light-and-screens",
            title: "Screens, Evening Light, and Sleep",
            summary:
                "How to limit alerting light without going off-grid—filters, dimming, and timing.",
            tag: "Guidance",
        },
        {
            href: "/blog/morning-light-and-consistency",
            title: "Morning Light and Consistent Wake Times",
            summary:
                "The simplest circadian anchor: bright morning light and regular wake time.",
            tag: "Guidance",
        },
    ];

    return (
        <>
            <main className="mx-auto max-w-5xl px-4 py-12">
                <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Sleep Habits & Lifestyle" }]} />

                {/* Hero */}
                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Sleep Habits & Lifestyle</h1>
                    <p className="mt-3 max-w-3xl text-neutral-400">
                        The day shapes the night. Use these evidence-based habits—timing, light, caffeine,
                        movement—to make sleep easier and more consistent.
                    </p>
                </header>

                {/* Mini TOC */}
                <nav aria-label="On this page" className="mb-8">
                    <ul className="flex flex-wrap gap-2 text-sm">
                        <li>
                            <a href="#core-habits" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Core Habits
                            </a>
                        </li>
                        <li>
                            <a href="#timing" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Timing & Routine
                            </a>
                        </li>
                        <li>
                            <a href="#lifestyle" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Lifestyle Factors
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Core Habits */}
                <section id="core-habits" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Core Habits</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {coreHabits.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                {/* Timing & Routine */}
                <section id="timing" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Timing & Routine</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {timingAndStimulants.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                {/* Lifestyle Factors */}
                <section id="lifestyle" className="mb-16">
                    <h2 className="mb-4 text-2xl font-semibold">Lifestyle Factors</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {lifestyle.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-400">
                    Start with a consistent wake time and morning light exposure. Those two habits pull the
                    rest into place with the least effort.
                </aside>
            </main>
        </>
    );
}
