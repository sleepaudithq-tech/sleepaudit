export function Placeholder({ label }: { label: string }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-dashed border-neutral-700 p-4 text-sm text-neutral-400">
      {label}
    </div>
  )
}

