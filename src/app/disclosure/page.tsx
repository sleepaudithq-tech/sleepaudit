// src/app/disclosure/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure | SleepAudit.io",
  description:
    "How SleepAudit.io uses affiliate links, our selection standards, and how we stay objective.",
  alternates: {
    canonical:
      (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "") + "/disclosure",
  },
};

export default function DisclosurePage() {
  return (
    <main className="pt-header mx-auto max-w-3xl px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Disclosure</h1>
        <p className="mt-2 text-neutral-500">Last updated: Oct 15, 2025</p>
      </header>

      <section className="prose prose-invert max-w-none">
        <p>
          SleepAudit.io is reader-supported. Some articles may include affiliate links. If you click a link and make a
          purchase, we may earn a commission at no extra cost to you. These links help us keep the site fast,
          independent, and ad-light.
        </p>

        <h2>How affiliate links work</h2>
        <ul>
          <li>
            We route outbound product links through <code>/out/&lt;slug&gt;</code> to maintain clean URLs and allow us to
            change retailers without editing posts.
          </li>
          <li>All monetized links use <code>rel="nofollow sponsored"</code> for transparency.</li>
          <li>
            Articles that include affiliate links also display a brief disclosure near the footer of the page.
          </li>
        </ul>

        <h2>Our selection standards</h2>
        <ul>
          <li>Claims must be supported by citations or manufacturer documentation.</li>
          <li>We prioritize evidence quality and real-world usability over hype.</li>
          <li>Monetization never determines inclusion or ranking; products are chosen on merit.</li>
        </ul>

        <h2>Amazon Associates statement</h2>
        <p>As an Amazon Associate, SleepAudit.io earns from qualifying purchases.</p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us on the <a href="/contact">Contact</a> page.
        </p>
      </section>
    </main>
  );
}

