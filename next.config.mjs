import createMDX from "@next/mdx"

const withMDX = createMDX({ extension: /\.mdx?$/ })

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  eslint: {
    ignoreDuringBuilds: true, // ← let the build pass even if ESLint finds errors
  },
})
