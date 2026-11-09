import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'
import { projectSchema, renderMarkdown } from './src/lib/content'

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.md',
  schema: projectSchema.extend({
    client: z.string().trim().min(1),
    year: z.string().regex(/^\d{4}$/),
    order: z.number().int().default(99),
    accent: z.string().optional(),
  }),
  transform: (doc) => ({
    ...doc,
    image:
      doc.image &&
      !doc.image.startsWith('/') &&
      !doc.image.startsWith('https://')
        ? `/${doc.image}`
        : doc.image,
    html: renderMarkdown(doc.content),
  }),
})

export default defineConfig({ content: [projects] })
