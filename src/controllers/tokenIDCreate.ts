import GetMedtoken from '../services/GetMedtoken'
import Data from '../handlers/dataAtual'
import HandlerPrioridade from '../handlers/handlerPrioridade'

export default async function TokenIDCreate(tipoFicha) {
  const [data] = await GetMedtoken()
  const dateList = []
  const prioridadeList = []
  for (const item of data) {
    if ('token' in item) {
      dateList.push(item.date)
      prioridadeList.push(item.prioridade)
    }
  }

  const tokenToday = [
    data.filter(
      (item) =>
        item.date === Data(true) &&
        item.prioridade === HandlerPrioridade(tipoFicha),
    ),
  ]

  
  console.log(tokenToday)
}
