import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'user'],
      required: true,
    },
  ],
  access: {
    create: ({ req: { user } }) => user && user.role === 'admin',
    read: ({ req }) => {
      const { user } = req;
      return user && (user.role === 'admin' || user.id === req.params.id);
    },
    update: ({ req }) => {
      const { user } = req;
      return user && (user.role === 'admin' || user.id === req.params.id);
    },
    delete: ({ req: { user } }) => user && user.role === 'admin',
  },
};

