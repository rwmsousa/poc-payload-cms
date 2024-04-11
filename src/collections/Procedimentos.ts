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
    create: ({ req: { user } }) => user && (user.role === 'Admin' || user.role === 'Editor'),
    read: ({ req: { user } }) => user && (user.role === 'Admin' || user.role === 'Editor'),
    update: ({ req: { user } }) => user && (user.role === 'Admin' || user.role === 'Editor'),
    delete: ({ req: { user } }) => user && (user.role === 'Admin' || user.role === 'Editor'),
  },
};
