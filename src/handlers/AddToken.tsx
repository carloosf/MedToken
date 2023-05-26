import React, { useState } from 'react'
import Data from './dataAtual'
import HandlerToken from './handlerToken'

export default async function AddToken({ dados }) {
  const [status, setStatus] = useState('')

  React.useEffect(() => {
    fetch('https://medtoken-api.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: HandlerToken(dados.tipoToken),
        name: dados.nome,
        date: Data(true),
        prioridade: dados.tipoToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data.token)
        setStatus(data.status)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [dados.nome, dados.tipoToken])

  return status
}
