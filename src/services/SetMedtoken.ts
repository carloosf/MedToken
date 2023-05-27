import TokenData from '../models/Model.Token'

const SetMedtoken = async (dados: TokenData) => {
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
}

export default SetMedtoken
