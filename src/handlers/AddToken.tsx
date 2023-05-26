import { useState, useEffect } from 'react'
export default function AddToken({ dados }) {
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://medtoken-api.onrender.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: dados.token,
            name: dados.nome,
            date: dados.date,
            prioridade: dados.tipoToken,
          }),
        })
        const data = await response.json()
        console.log('Response:', data.token)
        setStatus(data.status)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [dados.date, dados.nome, dados.tipoToken, dados.token])

  return { status }
}
