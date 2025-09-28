import MDXContent from "@/components/MDXContent"
import Article from "./content.mdx"

export const metadata = {
  title: "What Is Sleep? A Modern Recap of the Science (2025)",
  description:
    "A cornerstone feature on sleep: what we thought it was, what science now shows, and how modern life keeps pulling it off-beat.",
  alternates: { canonical: "/blog/what-is-sleep" },
  openGraph: {
    type: "article",
    title: "What Is Sleep? A Modern Recap of the Science",
    description:
      "A cornerstone feature on sleep—covering its stages, functions, and the 21st-century pressures reshaping it.",
    images: [
      {
        url: "/images/sleep-science-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dim room, cool bedding, faint dawn light",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <MDXContent>
        <Article />
      </MDXContent>
    </main>
  )
}
