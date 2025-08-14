import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'shortDescription', type: 'text' }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'pros', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cons', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'badge', type: 'string', options: { list: [
      { title: 'Best Overall', value: 'best-overall' },
      { title: 'Best Value', value: 'best-value' },
      { title: "Editors' Choice", value: 'editors-choice' },
      { title: 'Best Cooling', value: 'best-cooling' },
      { title: 'Most Comfortable', value: 'most-comfortable' },
    ] } }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', validation: Rule => Rule.required() }, { name: 'caption', type: 'string' }] }],
      validation: Rule => Rule.min(1),
    }),
    defineField({ name: 'brand', type: 'reference', to: [{ type: 'brand' }]}),
    defineField({ name: 'category', type: 'reference', to: [{ type: 'productCategory' }], validation: Rule => Rule.required() }),
    defineField({ name: 'price', type: 'object', fields: [
      { name: 'current', type: 'number' },
      { name: 'original', type: 'number' },
      { name: 'currency', type: 'string', initialValue: 'USD' },
      { name: 'lastChecked', type: 'datetime' },
    ]}),
    defineField({ name: 'rating', type: 'object', fields: [
      { name: 'overall', type: 'number' },
      { name: 'comfort', type: 'number' },
      { name: 'cooling', type: 'number' },
      { name: 'value', type: 'number' },
      { name: 'durability', type: 'number' },
    ]}),
    defineField({ name: 'affiliateLink', type: 'url' }),
    defineField({ name: 'availability', type: 'string', options: { list: [
      { title: 'In Stock', value: 'in-stock' },
      { title: 'Limited', value: 'limited' },
      { title: 'Out of Stock', value: 'out-of-stock' },
    ] }, initialValue: 'in-stock' }),
    defineField({ name: 'lastUpdated', type: 'datetime' }),
  ],
})
