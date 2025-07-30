export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          SleepAudit.io
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Evidence-based sleep optimization through science and research
        </p>
        <div className="space-y-4">
          <a
            href="/blog/why-you-get-hot-when-you-sleep"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read Our Research
          </a>
        </div>
      </div>
    </main>
  )
}
