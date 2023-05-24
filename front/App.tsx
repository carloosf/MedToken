import { useEffect, useState } from 'react'
import LoadingScreen from './src/components/LoadingScreen'
import TokenForms from './src/components/TokenForms'
import Background from './src/components/Background'

export default function App() {
  const [Loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <Background>
      {Loading ? <LoadingScreen /> : <TokenForms/>}
    </Background>
  )
}
