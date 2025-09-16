import type { MDXComponents } from "mdx/types"
import ArticleTOC from "./components/ArticleTOC"
import AffiliateLink from "./components/AffiliateLink"
import SeoBlogJsonLd from "./components/SeoBlogJsonLd"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    AffiliateLink,
    SeoBlogJsonLd,
    // Wraps every MDX article
    wrapper: ({ children }) => (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <article
          className={[
            // Base typography (slightly larger body for readability)
            "prose prose-neutral prose-lg dark:prose-invert",

            // Headings: size, weight, spacing, and scroll offset for anchor links
            "prose-headings:scroll-mt-24",
            "prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-semibold prose-h1:leading-tight prose-h1:mb-6",
            "prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4",
            "prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-2",

            // Body & lists
            "prose-p:leading-7 prose-li:leading-7",

            // Links
            "prose-a:underline prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-700",

            // HR, images, blockquotes, code, tables
            "prose-hr:my-10",
            "prose-img:rounded-lg",
            "prose-blockquote:border-l-4 prose-blockquote:border-neutral-300 prose-blockquote:pl-4",
            "prose-code:before:content-[''] prose-code:after:content-[''] prose-code:bg-neutral-100 dark:prose-code:bg-neutral-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
            "prose-table:mt-6 prose-th:font-semibold prose-thead:border-b prose-tbody:divide-y",
          ].join(" ")}
        >
          <ArticleTOC />
          {children}
        </article>
      </main>
    ),
  }
}
