export default function Disclaimer({
  children,
  className = "",
}: { children?: React.ReactNode; className?: string }) {
  return (
    <aside
      className={
        "mt-6 rounded-xl border border-yellow-700/30 bg-yellow-900/10 p-4 text-sm text-yellow-200 " +
        className
      }
      role="note"
      aria-label="Medical disclaimer"
    >
      <p className="font-medium">Important:</p>
      <p className="mt-1">
        Information on this page is educational and not a substitute for medical advice. Talk to your
        clinician before starting or stopping any supplement, especially if you're pregnant, nursing, have a
        medical condition, or take medications.
      </p>
      {children ? <div className="mt-2">{children}</div> : null}
    </aside>
  )
}
