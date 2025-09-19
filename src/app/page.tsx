import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">SleepAudit.io</h1>
      <p className="text-lg text-neutral-400 mb-8">
        Evidence-based sleep guides and independent product reviews — built to help you sleep cooler, deeper, and better.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/blog"
          className="px-6 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition"
        >
          Blog
        </Link>
        <Link
          href="/learn"
          className="px-6 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition"
        >
          Learn
        </Link>
      </div>
    </main>
  );
}
