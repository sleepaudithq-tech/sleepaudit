import { client } from '@/lib/sanity'

export default async function HomePage() {
  const posts = await client.fetch(`*[_type == "post"]{title, slug}`)

  return (
    <main style={{ padding: '2rem' }}>
      <h1>SleepAudit.io</h1>
      <ul>
        {posts.map((p: any) => (
          <li key={p.slug.current}>
            {p.title} ({p.slug.current})
          </li>
        ))}
      </ul>
    </main>
  )
}
