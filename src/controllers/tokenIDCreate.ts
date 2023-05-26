import GetMedtoken from '../services/GetMedtoken'
import Data from '../handlers/dataAtual'
import HandlerPrioridade from '../handlers/handlerPrioridade'

export default async function TokenIDCreate(tipoFicha) {
  const data = await GetMedtoken()

  let id = 1

  if (data.length > 0) {
    const tokensFiltered = data.filter(
      (token) => token.prioridade === HandlerPrioridade(tipoFicha),
    )
    console.log(tokensFiltered)

    if (tokensFiltered.length > 0) {
      const lastToken = tokensFiltered[tokensFiltered.length - 1]
      const regex = /(\d{2})(\d+)/
      const matches = lastToken.token.match(regex)

      if (matches) {
        id = parseInt(matches[2]) + 1
      }
    }
  }

  const novaFicha = `${Data(false)}${HandlerPrioridade(tipoFicha)}${id}`
  console.log(`Nova ficha: ${novaFicha}`)

  return novaFicha
}
