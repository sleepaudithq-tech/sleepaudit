import { client, getPlaceholderData } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'

interface Category {
    _id: string
    title: string
    slug: { current: string }
    description?: string
    color: string
}

interface Post {
    _id: string
    title: string
    slug: { current: string }
    excerpt?: string
    publishedAt: string
    estimatedReadingTime: number
    tags?: string[]
    featuredImage?: {
        asset: { url: string }
        alt?: string
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const category = await client.fetch<Category>(
        `*[_type == "category" && slug.current == $slug][0]{
      title,
      description
    }`,
        { slug: params.slug }
    )

    if (!category) return { title: 'Category Not Found' }

    return {
        title: `${category.title} - SleepAudit Blog`,
        description: category.description || `Browse all posts in the ${category.title} category.`
    }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    let category: Category | null = null
    let posts: Post[] = []

    try {
        // Try to fetch from Sanity
        category = await client.fetch<Category>(
            `*[_type == "category" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        description,
        color
      }`,
            { slug: params.slug }
        )

        posts = await client.fetch<Post[]>(
            `*[_type == "post" && status == "published" && category->slug.current == $slug] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        estimatedReadingTime,
        tags,
        featuredImage{asset->{url}, alt}
      }`,
            { slug: params.slug }
        )
    } catch (error) {
        // Fall back to placeholder data if Sanity isn't connected
        const { placeholderCategories, placeholderPosts } = getPlaceholderData()
        category = placeholderCategories.find(c => c.slug.current === params.slug) || null
        posts = placeholderCategories.find(c => c.slug.current === params.slug)
            ? placeholderPosts.filter(p => p.category?.slug.current === params.slug)
            : []
    }

    // If no data from Sanity, use placeholder data
    if (!category) {
        const { placeholderCategories, placeholderPosts } = getPlaceholderData()
        category = placeholderCategories.find(c => c.slug.current === params.slug) || null
        if (category) {
            posts = placeholderPosts.filter(p => p.category?.slug.current === params.slug)
        }
    }

    if (!category) {
        notFound()
    }

    return (
        <div className="sleep-bg">
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Breadcrumb Navigation */}
                <nav className="mb-8">
                    <Link href="/blog" className="btn-secondary">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </nav>

                {/* Category Header */}
                <header className={`card rounded-lg p-8 mb-12 text-center`}>
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
                        {category.title}
                    </h1>
                    {category.description && (
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {category.description}
                        </p>
                    )}
                    <div className="mt-6">
                        <span className={`badge`}>
                            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                        </span>
                    </div>
                </header>

                {/* Posts Grid */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Posts in {category.title}</h2>

                    {posts.length > 0 ? (
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
                                        <span className="badge mb-3">{category.title}</span>

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
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No posts published in this category yet.</p>
                            <p className="text-gray-400 text-sm">Check back soon for new content!</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
