import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './plugins/structure'
import {previewPlugin} from './plugins/preview-pane'

export default defineConfig({
  name: 'default',
  title: 'ALBA',

  projectId: 'yc9q9o42',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    previewPlugin,
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, {document}) => {
      const baseUrl = process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NODE_ENV === 'development' 
          ? 'http://localhost:3000' 
          : 'https://your-production-domain.com'
      
      if (document._type === 'post' && document.slug && typeof document.slug === 'object' && 'current' in document.slug) {
        return `${baseUrl}/api/preview?secret=${process.env.SANITY_PREVIEW_SECRET || 'your-secret-token'}&slug=${document.slug.current}`
      }
      
      return prev
    },
  },
  
})
