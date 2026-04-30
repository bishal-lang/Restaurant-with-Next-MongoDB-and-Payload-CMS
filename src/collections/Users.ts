import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
  },

  auth: true,

  access: {
    admin: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
    create: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
  },

  fields: [
    {
      name: 'fullName', // ✅ fixed
      type: 'text',
      required: true,
    },

    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Others', value: 'others' },
      ],
      required: true,
    },

    {
      name: 'role',
      type: 'select',
      defaultValue: 'user',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
    },

    {
      name: 'phone',
      type: 'text',
      required: true,
      validate: (value: string | null | undefined) => {
        if (!value) return 'Phone number is required'

        const cleaned = value.replace(/\D/g, '')

        if (cleaned.length < 10 || cleaned.length > 15) {
          return 'Enter a valid phone number'
        }

        return true
      },
    },

    {
      name: 'address',
      type: 'textarea',
    },
  ],
}