import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd"

export const metadata = {
  title: "Magnesium for Sleep: Types, Timing, and Safety",
  description:
    "Does magnesium help you sleep? Evidence review of glycinate, citrate, threonate; timing, dose ranges, side effects, and who should avoid it.",
  alternates: { canonical: "/supplements/magnesium-for-sleep" },
  openGraph: {
    type: "article",
    title: "Magnesium for Sleep: Types, Timing, and Safety",
    description:
      "Evidence review of magnesium for sleep--best forms, timing, dosing, and safety.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Magnesium supplement and bedtime" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  const url =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://sleepaudit.io") +
    "/supplements/magnesium-for-sleep"

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SeoBlogJsonLd
        url={url}
        title="Magnesium for Sleep: Types, Timing, and Safety"
        description="Does magnesium help you sleep? Evidence review of glycinate, citrate, threonate; timing, dose ranges, side effects, and who should avoid it."
        datePublished="2025-09-28"
        author="The SleepAudit Team"
        image="/images/og-default.jpg"
      />
      <MDXContent>
        <Article />
      </MDXContent>
    </main>
  )
}
