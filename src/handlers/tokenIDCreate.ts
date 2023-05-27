import GetMedtoken from '../services/GetMedtoken'
import Data from '../handlers/dataAtual'
import HandlerPrioridade from '../handlers/handlerPrioridade'

const TokenIDCreate = async (tipoFicha) => {
  const [data] = await GetMedtoken()

  const tokenToday = data.filter(
    (item: { date: string; prioridade: string }) =>
      item.date === Data(true) &&
      item.prioridade === HandlerPrioridade(tipoFicha),
  )

  const id = tokenToday.length + 1
  const newToken = `${Data(false)}${HandlerPrioridade(tipoFicha)}${id}`
  console.log('Novo token: ' + newToken)

  return newToken
}
export default TokenIDCreate
