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
};
