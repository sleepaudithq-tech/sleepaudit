import { defineField, defineType } from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Product Review',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'product', type: 'reference', to: [{ type: 'product' }], validation: Rule => Rule.required() }),
    defineField({ name: 'reviewType', type: 'string', options: { list: ['in-depth', 'quick', 'comparison', 'buyers-guide'] }, initialValue: 'in-depth' }),
    defineField({ name: 'testingPeriod', type: 'string' }),
    defineField({ name: 'verdict', type: 'object', fields: [
      { name: 'summary', type: 'text' },
      { name: 'whoItsFor', type: 'array', of: [{ type: 'string' }] },
      { name: 'whoShouldAvoid', type: 'array', of: [{ type: 'string' }] },
    ]}),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'lastUpdated', type: 'datetime' }),
  ]
})
