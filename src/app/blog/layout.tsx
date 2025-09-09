export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <article className="prose prose-neutral">{children}</article>
        </main>
    )
}
