import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
  const user = await payload.find({
    collection: 'users',
    where: {
      email: { equals: 'demo@payloadcms.com' },
    },
  })

  if (!user.docs.length) {
    payload.logger.info('---- SEEDING DATABASE ----')
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo@payloadcms.com',
        password: 'demo',
        roles: ['admin'],
      },
    })
  }
}
