import app from "./app";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


app.Router.post('/', async (req, res) => {
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
