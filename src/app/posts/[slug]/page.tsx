import { client, getPlaceholderData } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

// Type definitions for posts
interface Post {
  title: string
  metaDescription: string
  slug: { current: string }
  publishedAt: string
  estimatedReadingTime: number
  category?: { title: string; slug: { current: string } }
  featuredImage?: {
    asset: { url: string }
    alt?: string
  }
  body: any[]
  sources?: Array<{
    title: string
    url: string
    authors?: string
  }>
}

// PortableText custom components
const portableTextComponents = {
  types: {
    chartData: ({ value }: any) => (
      <div className="my-8 bg-gray-50 p-6 rounded-lg">
        <div className="text-center text-gray-600">
          Chart: {value.title}
        </div>
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 mt-12">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-medium text-gray-700 mb-4 mt-8">{children}</h3>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

// Generate SEO metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await client.fetch<Post>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      metaDescription,
      featuredImage{asset->{url}, alt},
      publishedAt
    }`,
    { slug: params.slug }
  )

  if (!post) return { title: 'Post Not Found' }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: new Date().toISOString(),
    image: post.featuredImage ? [post.featuredImage.asset.url] : [],
    author: {
      '@type': 'Organization',
      name: 'SleepAudit.io',
    },
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: post.featuredImage ? [post.featuredImage.asset.url] : [],
    },
    other: {
      'application/ld+json': JSON.stringify(jsonLd),
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  let post: Post | null = null

  try {
    // Try to fetch from Sanity
    post = await client.fetch<Post>(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        metaDescription,
        slug,
        publishedAt,
        estimatedReadingTime,
        category->{title, slug},
        featuredImage{asset->{url}, alt},
        body,
        sources[]{title, url, authors}
      }`,
      { slug: params.slug }
    )
  } catch (error) {
    // Fall back to placeholder data if Sanity isn't connected
    const { placeholderPosts } = getPlaceholderData()
    post = placeholderPosts.find(p => p.slug.current === params.slug) || null
  }

  // If no data from Sanity, use placeholder data
  if (!post) {
    const { placeholderPosts } = getPlaceholderData()
    post = placeholderPosts.find(p => p.slug.current === params.slug) || null
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="sleep-bg">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <Link href="/blog" className="btn-secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          {post.category && (
            <Link href={`/categories/${post.category.slug.current}`} className="badge mb-4">
              {post.category.title}
            </Link>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-8">
            {post.publishedAt && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
            {post.estimatedReadingTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.estimatedReadingTime} min read
              </div>
            )}
          </div>

          {post.featuredImage?.asset?.url && (
            <div className="mb-8">
              <img
                src={post.featuredImage.asset.url}
                alt={post.featuredImage.alt || post.title}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>

        {/* Sources Section */}
        {post.sources && post.sources.length > 0 && (
          <footer className="mt-16 pt-8 border-t border-blue-50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sources</h3>
            <ol className="space-y-3">
              {post.sources.map((source, index) => (
                <li key={index} className="text-sm text-gray-600">
                  <span className="font-medium">{index + 1}.</span>{' '}
                  {source.authors && <span>{source.authors}. </span>}
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                    {source.title}
                  </a>
                </li>
              ))}
            </ol>
          </footer>
        )}
      </div>
    </div>
  )
}
