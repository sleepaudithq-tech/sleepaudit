import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Sleep Better with
          <span className="text-blue-600"> Science</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Evidence-based sleep optimization through scientific research, product reviews,
          and actionable strategies. No wellness fluff—just proven methods to improve your sleep quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Read Our Research
          </Link>
          <Link
            href="/blog/why-you-get-hot-when-you-sleep"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium"
          >
            Latest Article
          </Link>
        </div>
      </div>

      {/* Value Props */}
      <div className="py-16 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research-Backed</h3>
            <p className="text-gray-600">
              Every recommendation is supported by peer-reviewed studies and scientific evidence.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven</h3>
            <p className="text-gray-600">
              Interactive charts and analysis help you understand the science behind better sleep.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable</h3>
            <p className="text-gray-600">
              Practical strategies you can implement immediately to optimize your sleep.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
