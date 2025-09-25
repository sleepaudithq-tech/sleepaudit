// next.config.mjs
import createMDX from "@next/mdx"

const withMDX = createMDX({ extension: /\.mdx?$/ })

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
})
