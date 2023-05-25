import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Prisma{
  opcao: String
}

export const getToken = async (opcao: String) => {
  try {
    const token = await prisma.token.findFirst({
      orderBy: {
        data: 'desc',
      },
      where: {
        tipoExame: { opcao },
      }
    });

    return token;
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
};
