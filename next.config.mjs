import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], // enable GitHub‑flavored Markdown (tables, strikethrough, task lists)
  },
})

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  eslint: {
    ignoreDuringBuilds: true, // ← let the build pass even if ESLint finds errors
  },
  async redirects() {
    return [
      {
        source: "/supplements/what-is-melatonin",
        destination: "/blog/melatonin-and-sleep",
        permanent: true,
      },
      {
        source: "/supplements/glycine-for-sleep",
        destination: "/blog/glycine-and-sleep",
        permanent: true,
      },
    ]
  },
})
