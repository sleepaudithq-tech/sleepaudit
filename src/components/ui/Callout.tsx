export default function Callout({
  type = "note",
  title,
  children,
}: {
  type?: "note" | "context" | "fact" | "study" | "safety"
  title?: string
  children?: React.ReactNode
}) {
  const styles: Record<string, string> = {
    note: "border-neutral-700 bg-neutral-900/40 text-neutral-200",
    context: "border-sky-700/40 bg-sky-900/15 text-sky-100",
    fact: "border-emerald-700/40 bg-emerald-900/15 text-emerald-100",
    study: "border-indigo-700/40 bg-indigo-900/15 text-indigo-100",
    safety: "border-yellow-700/40 bg-yellow-900/15 text-yellow-100",
  }
  return (
    <aside className={`not-prose mt-6 rounded-xl border p-4 text-sm ${styles[type]}`}>
      {title ? <p className="mb-1 font-semibold">{title}</p> : null}
      <div>{children}</div>
    </aside>
  )
}
