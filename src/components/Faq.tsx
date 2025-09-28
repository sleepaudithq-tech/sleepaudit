// Server component – renders FAQ UI and emits FAQPage JSON-LD

export type FaqItem = {
  question: string
  answer: string
}

export function Faq({
  items,
  title,
  headline,
}: {
  items: FaqItem[]
  title?: string
  headline?: string
}) {
  const heading = title ?? headline
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  }

  return (
    <section className="not-prose rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
      {heading ? (
        <h2 className="mb-2 text-xl font-semibold tracking-tight">{heading}</h2>
      ) : null}

      <dl className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {items.map((it, idx) => (
          <div key={idx} className="py-3">
            <dt className="font-medium">{it.question}</dt>
            <dd className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{it.answer}</dd>
          </div>
        ))}
      </dl>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}

export default Faq
