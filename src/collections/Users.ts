import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
  },

  auth: true,

  fields: [
    {
      name: 'full name',
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

        // Remove spaces/dashes for validation
        const cleaned = value.replace(/\D/g, '')

        // Example: 10–15 digits (international safe range)
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
