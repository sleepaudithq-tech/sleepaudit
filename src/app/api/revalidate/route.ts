import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{ _type: string; slug?: { current: string } }>(req, secret)
    if (!isValidSignature) return new NextResponse('Invalid signature', { status: 401 })
    if (!body?._type) return new NextResponse('Bad Request', { status: 400 })

    switch (body._type) {
      case 'product':
        revalidateTag('products')
        if (body.slug?.current) revalidatePath(`/products/${body.slug.current}`)
        break
      case 'review':
        revalidateTag('reviews')
        if (body.slug?.current) revalidatePath(`/reviews/${body.slug.current}`)
        break
      case 'post':
        revalidateTag('posts')
        if (body.slug?.current) revalidatePath(`/posts/${body.slug.current}`)
        break
      case 'productCategory':
      case 'category':
        revalidateTag('categories')
        break
      default:
        revalidateTag('products')
        revalidateTag('reviews')
        revalidateTag('posts')
    }

    return NextResponse.json({ revalidated: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
