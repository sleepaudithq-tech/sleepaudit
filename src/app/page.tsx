import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">SleepAudit.io</h1>
      <p className="text-lg text-neutral-400 mb-8">
        Evidence-based sleep guides and independent product reviews — built to help you sleep cooler, deeper, and better.
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="/blog"
          className="group block rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition p-6 min-w-[200px]"
        >
          <h2 className="text-xl font-semibold group-hover:underline">Blog</h2>
          <p className="mt-2 text-neutral-400 text-sm">
            Product reviews and sleep insights
          </p>
        </Link>
        <Link
          href="/learn"
          className="group block rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition p-6 min-w-[200px]"
        >
          <h2 className="text-xl font-semibold group-hover:underline">Learn</h2>
          <p className="mt-2 text-neutral-400 text-sm">
            Evidence-based sleep education
          </p>
        </Link>
      </div>
    </main>
  );
}
