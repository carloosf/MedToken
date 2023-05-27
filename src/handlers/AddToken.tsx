import TokenData from '../models/Model.Token'
const AddToken = async (dados: TokenData) => {
  await fetch('https://medtoken-api.onrender.com/', {
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
}
export default AddToken
