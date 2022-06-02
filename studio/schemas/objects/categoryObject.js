export default {
  name: 'categoryObject',
  type: 'object',
  title: 'Category Object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      name: 'object',
      type: "array",
      of: [{type: "categoryObject"}]
    },
  ],
}
