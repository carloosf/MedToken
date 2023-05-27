import TokenData from './Model.Token'

const AddToken = async (dados: TokenData) => {
  try {
    const response = await fetch('https://medtoken-api.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: dados.token,
        name: dados.name,
        date: dados.date,
        prioridade: dados.prioridade,
      }),
    })
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error ADD:', error)
  }
}

export default AddToken
