import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Prisma {
  opcao: String
}

export async function getToken(opcao: String) {
  try {
    const token = await prisma.token.findFirst({
      orderBy: {
        data: 'desc',
      },
      where: {
        tipoToken: { opcao },
      },
    })

    return token
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
