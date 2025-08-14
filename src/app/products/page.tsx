import { Suspense } from 'react'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { queries } from '@/lib/sanity-queries'

interface PageProps { searchParams: { page?: string; sort?: string } }

function ProductGridSkeleton() {
  return <div className="text-gray-600">Loading products…</div>
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const page = Number(searchParams.page) || 1
  const sort = searchParams.sort || 'rating'
  const limit = 12
  const data = await client.fetch(queries.productsPaginated, { page, limit, sort })

  return (
    <div className="sleep-bg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Sleep Products</h1>
          <p className="text-gray-600">Expert-tested products to transform your sleep quality</p>
        </div>
        <Suspense fallback={<ProductGridSkeleton />}> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((p: any) => (
              <article key={p._id} className="card rounded-lg overflow-hidden p-6">
                {p.images?.url && (
                  <div className="mb-4">
                    <img src={p.images.url} alt="" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-3">{p.shortDescription}</p>
                <Link href={`/api/out/${p._id}`} className="btn-primary text-sm">View Deal</Link>
              </article>
            ))}
          </div>
        </Suspense>
        <div className="text-center mt-10">
          <div className="inline-flex gap-2">
            {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((p: number) => (
              <Link key={p} href={`/products?page=${p}&sort=${sort}`} className={`px-4 py-2 rounded ${p===page ? 'bg-[#C0A080] text-[#181818]' : 'bg-blue-50 text-white hover:bg-blue-200'}`}>{p}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
