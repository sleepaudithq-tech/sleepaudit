// src/app/guides/environment/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "http://localhost:3000";
const pageUrl = `${siteUrl}/learn/environment`;
const ogImage = `${siteUrl}/images/cool-bedroom.jpg`;

export const metadata: Metadata = {
    title: "Sleep Environment & Optimization",
    description:
        "Temperature, light, noise, bedding—optimize your sleep environment with practical, evidence-based guidance.",
    alternates: { canonical: "/learn/environment" },
    openGraph: {
        type: "website",
        title: "Sleep Environment & Optimization • SleepAudit.io",
        description:
            "Temperature, light, noise, bedding—optimize your sleep environment with practical, evidence-based guidance.",
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

export default function EnvironmentCategoryPage() {
    const core = [
        {
            href: "/blog/ideal-bedroom-temperature",
            title: "The Ideal Bedroom Temperature for Sleep",
            summary:
                "Why cooler tends to be better, ideal ranges, and how to dial in your setup season by season.",
            tag: "Research",
        },
        {
            href: "/blog/light-exposure-sleep",
            title: "Light Exposure: Blue Light vs Darkness",
            summary:
                "How light timing shifts your circadian rhythm—and simple ways to control exposure.",
            tag: "Research",
        },
        {
            href: "/blog/noise-and-sleep-quality",
            title: "How Noise Impacts Sleep Quality",
            summary:
                "Soundscapes, white noise, and practical ways to mitigate disruptive environmental noise.",
            tag: "Research",
        },
        {
            href: "/blog/bedding-materials-overview",
            title: "Bedding Materials: Breathability & Feel",
            summary:
                "Cotton, linen, bamboo, and synthetics—what actually affects heat, moisture, and comfort.",
            tag: "Research",
        },
    ];

    const practical = [
        {
            href: "/blog/cooling-bedroom-setup",
            title: "Create a Cooling Bedroom Setup",
            summary:
                "Layered approach: air movement, breathable bedding, and heat-dissipating surfaces.",
            tag: "Guidance",
        },
        {
            href: "/blog/diy-sleep-cooling-without-ac",
            title: "DIY Sleep Hacks to Sleep Cooler Without A/C",
            summary:
                "Low-cost tweaks: airflow, ice packs, hydration timing, and fabric choices.",
            tag: "Guidance",
        },
        {
            href: "/blog/bedroom-light-blocking",
            title: "Block Light Effectively",
            summary:
                "Blackout strategies, device dimming, and pre-bed light management that's easy to stick with.",
            tag: "Guidance",
        },
    ];

    return (
        <>
            <main className="mx-auto max-w-5xl px-4 py-12">
                <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Sleep Environment & Optimization" }]} />

                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Sleep Environment & Optimization</h1>
                    <p className="mt-3 max-w-3xl text-neutral-400">
                        Temperature, light, noise, and materials all shape your sleep. Start with the core
                        principles, then use the action guides to make measurable changes tonight.
                    </p>
                </header>

                <nav aria-label="On this page" className="mb-8">
                    <ul className="flex flex-wrap gap-2 text-sm">
                        <li>
                            <a href="#core" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Core Concepts
                            </a>
                        </li>
                        <li>
                            <a href="#practical" className="rounded-full border border-neutral-700 px-3 py-1 hover:bg-neutral-900">
                                Practical Guides
                            </a>
                        </li>
                    </ul>
                </nav>

                <section id="core" className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold">Core Concepts</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {core.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                <section id="practical" className="mb-16">
                    <h2 className="mb-4 text-2xl font-semibold">Practical Guides</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {practical.map((p) => (
                            <Card key={p.href} {...p} />
                        ))}
                    </div>
                </section>

                <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-400">
                    Tip: Address heat, light, and noise in that order for the biggest gains with the least effort.
                </aside>
            </main>
        </>
    );
}
