import GetMedtoken from '../services/GetMedtoken'
import HandlerPrioridade from '../handlers/handlerPrioridade'

const TokenIDCreate = async (tipoFicha, dateTime) => {
  const [data] = await GetMedtoken()

  const tokenToday = data.filter(
    (item: { date: string; prioridade: string }) =>
      item.date === dateTime(true) &&
      item.prioridade === HandlerPrioridade(tipoFicha),
  )

  const id = tokenToday.length + 1
<<<<<<< HEAD
  let newToken = ''

  if (tokenToday.length < 9) {
    newToken = `${dateTime(false)}${HandlerPrioridade(tipoFicha)}0${id}`
  } else {
    newToken = `${dateTime(false)}${HandlerPrioridade(tipoFicha)}${id}`
  }
=======
  const newToken = `${Data(false)}${HandlerPrioridade(tipoFicha)}${id}`
>>>>>>> parent of a3c4322e (enviando pro banco)
  console.log('Novo token: ' + newToken)

  return newToken
}
export default TokenIDCreate
