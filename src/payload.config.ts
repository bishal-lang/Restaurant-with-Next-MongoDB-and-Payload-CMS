import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Menu } from './collections/Menu'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log('IS VERCEL:', process.env.VERCEL)
console.log('BLOB TOKEN:', process.env.BLOB_READ_WRITE_TOKEN?.substring(0, 25))
console.log('NODE_ENV:', process.env.NODE_ENV)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Menu],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: 'vercel_blob_rw_NKk89afAAmT6dio1_I1UjqJpyxhq8B4XW2ypmlpcSlTlpje',
      addRandomSuffix: true,
      clientUploads: true,
    }),
  ],
})
