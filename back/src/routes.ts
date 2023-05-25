import { Request, Response } from 'express'
import HandlerToken from './handlers/handlerToken'

const express = require('express')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router()

interface CreateTokenRequest {
  token: string
  nome: string
  data: string
  tipoExame: string
}

router.post('/', async (req: Request<CreateTokenRequest>, res: Response) => {
  const { token, nome, data, tipoExame } = req.body;
  const datas = {
    token: token,
    nome: nome,
    data: data,
    tipoExame: tipoExame
  }

  try {
    const newToken = await prisma.token.create({
      data: {
        token: token,
        nome: nome,
        data: data,
        tipoExame: tipoExame
      },
    })

    res.status(201).json(newToken)
  } catch (error) {
    console.error(error)

    res.status(500).send({ error: 'Falha ao criar o token' + datas })
  }
})


router.get('/token', async (req: Request, res: Response) => {
  const lastRecord = await prisma.token.findFirst({
    where: { 
      tipoExame: 'geral'
    },
    orderBy: {
      data: 'desc'
    }
  })

  if (lastRecord && lastRecord.token) {
    res.send(HandlerToken(lastRecord.token))
  } else {
    res.sendStatus(404)
  }
})
export default router
