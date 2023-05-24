import { log } from 'console';
import { Request, Response } from 'express'
const express = require('express')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router()

interface CreateTokenRequest {
  token: string
  nome: string
  data: string
}

router.post('/', async (req: Request<CreateTokenRequest>, res: Response) => {
  const { token, nome, data } = req.body;
  const datas =  {
    token: token,
    nome: nome,
    data: data
  }

  try {
    const newToken = await prisma.token.create({
      data: {
        token: token,
        nome: nome,
        data: data
      },
    }) 

    res.status(201).json(newToken)
  } catch (error) {
    console.error(error)
    
    res.status(500).send({ error: 'Falha ao criar o token' +  datas})
  }
})


router.get('/', async (req: Request, res: Response) => {

})
export default router
