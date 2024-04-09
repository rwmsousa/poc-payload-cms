import { CollectionConfig } from 'payload/types'

const Procedimentos: CollectionConfig = {
  slug: 'procedimentos',
  auth: true,
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
    }
  ],
}

export default Procedimentos
