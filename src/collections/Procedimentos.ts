import { CollectionConfig } from 'payload/types'
import { admins } from './access/admins'
import adminsAndUser from './access/adminsAndUser'
import { anyone } from './access/anyone'

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
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
}
