import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ALBA',

  projectId: 'yc9q9o42',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, {document}) => {
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3000' 
        : 'https://your-production-domain.com'
      
      if (document._type === 'post') {
        return `${baseUrl}/api/preview?secret=your-secret-token&slug=${document.slug?.current}`
      }
      
      return prev
    },
  },
  
})
