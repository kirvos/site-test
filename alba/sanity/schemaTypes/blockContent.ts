import {defineType} from 'sanity'

/**
 * This is the schema definition for the rich text content used in
 * all blog posts. When you import it in a schema definition, it will
 * be rendered as Sanity's portable text editor.
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title and/or icon
      // here. Also, each item in the array should have a key, to ensure
      // it's uniquely identified. The default style will be the first item
      // in the array.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
      // Marks let you mark up inline text in the block editor. 
      marks: {
        // Decorators usually just turn a piece of text bold or italic. You
        // can also put in line-through, underline etc.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // You can add custom types to your portable text editor
    {
      type: 'image',
      options: {hotspot: true},
    },
  ],
})
