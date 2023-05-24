import { Request, Response } from 'express'
const express = require('express')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router()

interface CreateTokenRequest {
  token: string
  nome: string
}

router.post('/', async (req: Request<any, any, CreateTokenRequest>, res: Response) => {
  const { token, nome } = req.body;

  try {
    const newToken = await prisma.token.create({
      data: {
        token,
        nome,
      },
    });

    res.status(201).json(newToken);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Falha ao criar o token' });
  }
})

export default router
