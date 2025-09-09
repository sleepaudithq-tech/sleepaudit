import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const withMDX = createMDX({
    options: {
        // enables | pipe tables, task lists, etc.
        remarkPlugins: [remarkGfm],
        // nice IDs and clickable headings
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
        providerImportSource: '@/mdx-components',
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
}

export default withMDX(nextConfig)
