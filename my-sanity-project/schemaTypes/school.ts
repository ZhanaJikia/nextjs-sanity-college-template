import {defineField, defineType} from 'sanity'

export const school = defineType({
  name: 'school',
  title: 'School',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'theme',
      type: 'string',
      options: {
        list: [
          {title: 'Navy', value: 'navy'},
          {title: 'Emerald', value: 'emerald'},
          {title: 'Crimson', value: 'crimson'},
          {title: 'Violet', value: 'violet'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
  ],
})


