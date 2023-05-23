import { useEffect, useState } from 'react'

import LoadingScreen from './src/components/LoadingScreen'
import Token from './src/components/Token'
import Background from './src/components/Background'

export default function App() {
  const [Loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <Background>
      {Loading ? <LoadingScreen /> : <Token token="2023050102" color="black" />}
    </Background>
  )
}
