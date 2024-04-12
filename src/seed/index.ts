import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
  const user = await payload.find({
    collection: 'users',
    where: {
      email: { equals: process.env.PAYLOAD_USER_MASTER },
    },
  })

  if (!user.docs.length) {
    payload.logger.info('---- SEEDING DATABASE ----')
    await payload.create({
      collection: 'users',
      data: {
        email: process.env.PAYLOAD_USER_MASTER,
        password: process.env.PAYLOAD_PASSWORD_MASTER,
        roles: ['admin'],
      },
    })
  }
}
