import { defineField, defineType } from 'sanity'

export const productCategoryType = defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'sortOrder', type: 'number', initialValue: 0 }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
  ]
})
