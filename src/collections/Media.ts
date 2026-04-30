import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        // If URL points to our own domain, try to fix it
        if (doc?.url && doc.url.includes('/api/media/file/')) {
          const filename = doc.url.split('/api/media/file/')[1]
          console.log('FIXING URL for:', filename)
          console.log('CURRENT URL:', doc.url)
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
