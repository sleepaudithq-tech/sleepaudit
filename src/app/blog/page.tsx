import { client, getPlaceholderData } from '@/lib/sanity'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    excerpt?: string
    publishedAt: string
    estimatedReadingTime: number
    category?: { title: string; slug: { current: string }; color: string }
    tags?: string[]
    featuredImage?: {
        asset: { url: string }
        alt?: string
    }
    status: string
}

interface Category {
    _id: string
    title: string
    slug: { current: string }
    color: string
    description?: string
    featured: boolean
}

export default async function BlogPage() {
    let posts: Post[] = []
    let categories: Category[] = []

    try {
        // Try to fetch from Sanity
        posts = await client.fetch<Post[]>(`
        *[_type == "post" && status == "published"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          estimatedReadingTime,
          category->{title, slug, color},
          tags,
          featuredImage{asset->{url}, alt},
          status
        }
      `)

        categories = await client.fetch<Category[]>(`
        *[_type == "category"] | order(sortOrder asc, title asc) {
          _id,
          title,
          slug,
          color,
          description,
          featured
        }
      `)
    } catch (error) {
        // Fall back to placeholder data if Sanity isn't connected
        const { placeholderPosts, placeholderCategories } = getPlaceholderData()
        posts = placeholderPosts
        categories = placeholderCategories
    }

    // If no data from Sanity, use placeholder data
    if (!posts || posts.length === 0) {
        const { placeholderPosts } = getPlaceholderData()
        posts = placeholderPosts
    }

    if (!categories || categories.length === 0) {
        const { placeholderCategories } = getPlaceholderData()
        categories = placeholderCategories
    }

    // Get featured categories
    const featuredCategories = categories.filter(cat => cat.featured)

    return (
        <div className="min-h-screen sleep-bg">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        SleepAudit Blog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Evidence-based insights on sleep science, health optimization, and research-backed strategies for better rest.
                    </p>
                </header>

                {/* Featured Categories */}
                {featuredCategories.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Topics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {featuredCategories.map((category) => (
                                <Link
                                    key={category._id}
                                    href={`/categories/${category.slug.current}`}
                                    className={"card rounded-lg p-6 hover:shadow-xl"}
                                >
                                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                                        {category.title}
                                    </h3>
                                    {category.description && (
                                        <p className="text-gray-600 text-sm">{category.description}</p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* All Categories */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse by Category</h2>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <Link
                                key={category._id}
                                href={`/categories/${category.slug.current}`}
                                className="badge"
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post._id} className="card rounded-lg overflow-hidden">
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
                                        <Link href={`/categories/${post.category.slug.current}`} className="badge mb-3">
                                            {post.category.title}
                                        </Link>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        <Link href={`/posts/${post.slug.current}`} className="hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    {post.excerpt && (
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 3).map((tag, index) => (
                                                <span key={index} className="badge">{tag}</span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Read More */}
                                    <Link href={`/posts/${post.slug.current}`} className="btn-secondary">
                                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* No Posts Message */}
                    {posts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No blog posts published yet.</p>
                            <p className="text-gray-400 text-sm">Check back soon for new content!</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
