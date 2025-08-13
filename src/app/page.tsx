import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { client, getPlaceholderData } from '@/lib/sanity'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  estimatedReadingTime: number
  category?: {
    title: string
    slug: { current: string }
    color: string
  }
  featuredImage?: {
    asset: { url: string }
    alt?: string
  }
}

export default async function HomePage() {
  let posts: Post[] = []

  try {
    // Try to fetch from Sanity (limit to 3 posts)
    posts = await client.fetch<Post[]>(`
      *[_type == "post" && status == "published"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        estimatedReadingTime,
        category->{title, slug, color},
        featuredImage{asset->{url}, alt}
      }[0...3]
    `)
  } catch (error) {
    // Fall back to placeholder data if Sanity isn't connected
    console.log('Sanity fetch failed, using placeholder data')
  }

  // If no data from Sanity, use placeholder data
  if (!posts || posts.length === 0) {
    const { placeholderPosts } = getPlaceholderData()
    posts = placeholderPosts.slice(0, 3)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          SleepAudit.io
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
          Evidence-based insights on sleep science, health optimization, and research-backed strategies for better rest.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            Read Our Blog <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            href="/about"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600">
            Discover the latest research and strategies for better sleep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Featured Image */}
              {post.featuredImage?.asset?.url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage.asset.url}
                    alt={post.featuredImage.alt || post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                {post.category && (
                  <Link
                    href={`/categories/${post.category.slug.current}`}
                    className={`inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-3 hover:bg-blue-200 transition-colors`}
                  >
                    {post.category.title}
                  </Link>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link
                    href={`/posts/${post.slug.current}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.estimatedReadingTime} min read
                  </div>
                </div>

                {/* Read More */}
                <Link
                  href={`/posts/${post.slug.current}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View All Posts <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}