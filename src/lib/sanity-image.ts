import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client as any)

export function urlFor(source: any) {
  return builder.image(source)
}

export const imageProjection = `{
  ...,
  "url": asset->url,
  "dimensions": asset->metadata.dimensions,
  "lqip": asset->metadata.lqip
}`
