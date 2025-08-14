import { groq } from 'next-sanity'
import { imageProjection } from './sanity-image'

export const queries = {
  featuredProducts: groq`
    *[_type == "product" && featured == true] | order(rating.overall desc) {
      _id,
      name,
      slug,
      "brand": brand->{ _id, name },
      "category": category->{ _id, title, slug },
      price,
      priceHistory,
      rating,
      "images": images[]{ ${imageProjection} },
      shortDescription,
      badge,
      affiliateLink,
      lastUpdated,
      availability
    }[0...8]
  `,

  productBySlug: groq`
    *[_type == "product" && slug.current == $slug][0] {
      ...,
      "brand": brand->{ _id, name, logo },
      "category": category->{ _id, title, slug },
      "images": images[]{ ${imageProjection} },
      "relatedProducts": *[
        _type == "product" && category._ref == ^.category._ref && _id != ^._id
      ] | order(rating.overall desc) {
        _id, name, slug, price, rating,
        "images": images[0]{ ${imageProjection} }
      }[0...4]
    }
  `,

  productsForTags: groq`
    *[_type == "product" && count((tags[])[@ in $tags]) > 0] | order(rating.overall desc) {
      _id, name, slug, price, rating,
      "images": images[0]{ ${imageProjection} },
      affiliateLink
    }[0...3]
  `,

  productsPaginated: groq`
    {
      "items": *[_type == "product" && defined(slug.current)] |
        order(select(
          $sort == "rating" => rating.overall desc,
          $sort == "price-asc" => price.current asc,
          $sort == "price-desc" => price.current desc,
          $sort == "newest" => _createdAt desc,
          rating.overall desc
        )) [($page - 1) * $limit...$page * $limit] {
          _id,
          name,
          slug,
          "brand": brand->name,
          "category": category->title,
          price,
          rating,
          "images": images[0]{ ${imageProjection} },
          shortDescription,
          badge,
          affiliateLink
        },
      "total": count(*[_type == "product" && defined(slug.current)]),
      "page": $page,
      "limit": $limit,
      "totalPages": math::ceil(count(*[_type == "product" && defined(slug.current)]) / $limit)
    }
  `,

  categoryProductsPaginated: groq`
    {
      "items": *[_type == "product" && category->slug.current == $categorySlug && defined(slug.current)]
        | order(rating.overall desc) [($page - 1) * $limit...$page * $limit] {
          _id,
          name,
          slug,
          price,
          rating,
          "images": images[0]{ ${imageProjection} },
          shortDescription,
          badge,
          affiliateLink
        },
      "total": count(*[_type == "product" && category->slug.current == $categorySlug])
    }
  `,
}
