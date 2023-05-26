import Data from './dataAtual'
import HandlerPrioridade from './handlerPrioridade'
import TokenIDCreate from '../controllers/tokenIDCreate'

export default function HandlerToken(tipoToken: string) {
  const newToken = `${Data(false)}
  ${HandlerPrioridade(tipoToken)}${TokenIDCreate(tipoToken)}`
  console.log(newToken)
  return newToken
}
