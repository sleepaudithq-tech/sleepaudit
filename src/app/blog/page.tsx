import Link from 'next/link'

// This will eventually come from your CMS/markdown files
const blogPosts = [
    {
        slug: 'why-you-get-hot-when-you-sleep',
        title: 'Why You Get Hot When You Sleep: The Science Behind Nighttime Overheating',
        excerpt: 'Understanding why your body heats up at night involves complex interactions between your circadian rhythm, thermoregulation processes, and environmental factors.',
        date: 'January 15, 2024',
        readTime: '8 min read',
        category: 'Sleep Science',
        featured: true
    },
    // Add more posts here as you create them
]

export const metadata = {
    title: 'Sleep Research Blog',
    description: 'Evidence-based articles on sleep optimization, product reviews, and scientific research.',
}

export default function BlogIndex() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Sleep Research & Insights
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Evidence-based articles on sleep optimization, backed by scientific research
                    and designed to help you achieve better sleep quality.
                </p>
            </div>

            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.slug} className="mb-16">
                    <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                        <div className="max-w-4xl">
                            <div className="flex items-center text-sm text-blue-600 mb-4">
                                <span className="bg-blue-100 px-3 py-1 rounded-full">Featured</span>
                                <span className="ml-4">{post.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* All Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article key={post.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-center text-sm text-blue-600 mb-3">
                                <span>{post.category}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Categories Section */}
            <div className="mt-20 pt-16 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Browse by Category
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/categories/sleep-science" className="group">
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors">
                            <div className="text-3xl mb-4">🧠</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sleep Science & News</h3>
                            <p className="text-gray-600 text-sm">Research summaries and latest findings</p>
                        </div>
                    </Link>
                    <Link href="/categories/product-reviews" className="group">
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors">
                            <div className="text-3xl mb-4">⭐</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Reviews</h3>
                            <p className="text-gray-600 text-sm">Evidence-based product evaluations</p>
                        </div>
                    </Link>
                    <Link href="/categories/sleep-tips" className="group">
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors">
                            <div className="text-3xl mb-4">💤</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Better Sleep Habits</h3>
                            <p className="text-gray-600 text-sm">Actionable strategies and tips</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
} 