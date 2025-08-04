import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ALBA',

  projectId: 'd5va5nfa',
  dataset: 'alba_dataset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
