import { CollectionConfig } from 'payload/types'

export const Procedimentos: CollectionConfig = {
  slug: 'procedimentos',
  fields: [
    {
      name: 'tipo',
      label: 'Tipo',
      type: 'text',
      required: true,
    },
    {
      name: 'nome',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: false,
    },
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'textarea',
      required: false,
    },
  ],
  access: {
    create: ({ req: { user } }) => user && (user.role === 'admin' || user.role === 'user'),
    read: ({ req: { user } }) => user && (user.role === 'admin' || user.role === 'user'),
    update: ({ req: { user } }) => user && (user.role === 'admin' || user.role === 'user'),
    delete: ({ req: { user } }) => user && (user.role === 'admin' || user.role === 'user'),
  },
};
