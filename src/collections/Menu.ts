import { CollectionConfig } from 'payload'

export const Menu: CollectionConfig = {
  slug: 'menu',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Entrees', value: 'entrees' },
        { label: 'Mains', value: 'mains' },
        { label: 'Sides', value: 'sides' },
        { label: 'Sauces', value: 'sauces' },
        { label: 'Desserts', value: 'desserts' },
      ],
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',        // ← CHANGED from 'text'
      relationTo: 'media',   // ← points to Media collection
    },
  ],
}

export default Menu