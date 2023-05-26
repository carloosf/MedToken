import GetMedtoken from '../services/GetMedtoken'
import Data from '../handlers/dataAtual'
import HandlerPrioridade from '../handlers/handlerPrioridade'

export default async function TokenIDCreate(tipoFicha) {
  const [data] = await GetMedtoken()

  const tokenToday = data.filter(
    (item) =>
      item.date === Data(true) &&
      item.prioridade === HandlerPrioridade(tipoFicha),
  )

  const id = tokenToday.length + 1
  const newToken = `${Data(false)}${HandlerPrioridade(tipoFicha)}${id}`
  console.log('Novo token: ' + newToken)
  console.log(this.newToken)

  return newToken
}
