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
  let newToken = ''

  if (tokenToday.length < 9) {
    newToken = `${dateTime(false)}${HandlerPrioridade(tipoFicha)}0${id}`
  } else {
    newToken = `${dateTime(false)}${HandlerPrioridade(tipoFicha)}${id}`
  }
  console.log('Novo token: ' + newToken)
  return newToken
}
export default TokenIDCreate
