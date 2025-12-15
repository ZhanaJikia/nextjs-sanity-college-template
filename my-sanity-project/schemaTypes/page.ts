import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      type: 'reference',
      to: [{type: 'school'}],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pageType',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'FAQ', value: 'faq'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string'}),
        defineField({name: 'subheadline', type: 'text', rows: 3}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaUrl', type: 'url'}),
        defineField({name: 'image', type: 'image', options: {hotspot: true}}),
      ],
    }),
    defineField({name: 'body', type: 'array', of: [{type: 'block'}]}),
    defineField({
      name: 'faqItems',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', type: 'string'}),
            defineField({name: 'answer', type: 'array', of: [{type: 'block'}]}),
          ],
        },
      ],
    }),
  ],
})


