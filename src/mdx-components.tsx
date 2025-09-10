import type { MDXComponents } from "mdx/types"
import ArticleTOC from "./components/ArticleTOC"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <article className={[
          "prose prose-neutral dark:prose-invert",
          "prose-headings:scroll-mt-24 prose-h1:mb-4 prose-h1:leading-tight",
          "prose-h2:mt-12 prose-h2:mb-3 prose-h3:mt-8 prose-h3:mb-2",
          "prose-p:leading-7 prose-li:leading-7",
          "prose-a:underline prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-700",
          "prose-hr:my-8 prose-img:rounded-lg",
          "prose-table:mt-6 prose-th:font-semibold prose-thead:border-b prose-tbody:divide-y",
        ].join(" ")}>
          <ArticleTOC />
          {children}
        </article>
      </main>
    ),
  }
}
