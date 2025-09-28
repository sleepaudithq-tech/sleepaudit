export function Callout({
    title,
    children,
    tone = "info",
}: {
    title: string
    children: React.ReactNode
    tone?: "info" | "success" | "warning"
}) {
    const toneClasses =
        tone === "success"
            ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
            : tone === "warning"
                ? "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
                : "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800"

    return (
        <aside className={`not-prose my-6 rounded-xl border p-4 ${toneClasses}`}>
            <div className="text-sm font-medium opacity-80">{title}</div>
            <div className="prose dark:prose-invert max-w-none mt-2">{children}</div>
        </aside>
    )
}
