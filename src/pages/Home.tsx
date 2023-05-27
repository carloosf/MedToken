/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Token from '../components/Token'
import StylesHome from '../styles/Styles.Home'
import { Text, View } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import GetMedtoken from '../services/GetMedtoken'
import Logo from '../components/Logo'
import Line from '../components/Line'
import { SafeAreaView } from 'react-navigation'
import Data from '../handlers/handlerData'

const styles = StylesHome
interface HomeProps {
  token: React.ReactNode
  router: string
}

export default function Home({ token, router }: HomeProps) {
  const [tokensRecords, setTokensRecords] = useState([])
  const { router: tokenUser } = router.params
  console.log(tokenUser)

  useEffect(() => {
    const fetchTokensRecords = async () => {
      try {
        const [records] = await GetMedtoken()
        const formatTokensRecords = records
          .filter((record) => {
            const recordDate = record.date
            // Verifique se a data do registro é verdadeira, conforme sua lógica
            return recordDate === Data(true)
          })
          .map((record) => {
            let color = 'black'
            switch (record.prioridade) {
              case 'SP':
                color = 'blue'
                break
              case 'SE':
                color = 'red'
                break
              case 'SG':
                color = 'green'
                break
            }
            return [record.token, color, record.id]
          })
          .reverse()
          .slice(0, 4)

        setTokensRecords(formatTokensRecords)
      } catch (error) {
        console.log('Error fetching tokens records:', error)
      }
    }
    fetchTokensRecords()
  }, [])
  for (const item of tokensRecords) {
    console.log(item)
  }

  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  })

  if (!fontLoaded) {
    return null
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerHome}>
          <Logo />
          <Text style={styles.title}>Seu Token</Text>
          <Token idToken={tokenUser} color="black" />
        </View>
        <View style={styles.lineConteiner}>
          <Line />
        </View>
        <View style={styles.recordsContainer}>
          <Text style={styles.title}>Histórico de Solicitações</Text>
          <View style={styles.records}>
            {tokensRecords.map((token, index) => (
              <Token key={index} idToken={token[0]} color={token[1]} />
            ))}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
