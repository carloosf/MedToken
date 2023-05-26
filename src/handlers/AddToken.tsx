import { useEffect } from 'react'
export default function AddToken({ dados }) {
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
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [dados.date, dados.nome, dados.tipo, dados.tipoToken, dados.token])
}
