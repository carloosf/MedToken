import TokenData from '../models/Model.Token'

const SetMedtoken = async (dados: TokenData) => {
  try {
    const response = await fetch('http://localhost:3333', {
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
    console.log(response)
    const responseData = await response.json()
    return responseData
  } catch (err) {
    console.log('ERROR SetToken:' + err)
  }
}

export default SetMedtoken
