// src/components/MDXContent.tsx
export default function MDXContent({ children }: { children: React.ReactNode }) {
    return (
        <article className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-24">
            {children}
        </article>
    )
}
