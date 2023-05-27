
const AddToken = async (dados) => {
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

export default AddToken
