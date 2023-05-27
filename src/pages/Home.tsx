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

const styles = StylesHome

interface HomeProps {
  token: React.ReactNode
}

export default function Home({ token }: HomeProps) {
  const [tokensRecords, setTokensRecords] = useState([])

  useEffect(() => {
    const fetchTokensRecords = async () => {
      try {
        const [records] = await GetMedtoken()
        const formatTokensRecords = records
          .map((record) => record.token)
          .slice(0, 4)
          .reverse()
        setTokensRecords(formatTokensRecords)
      } catch (error) {
        console.log('Error fetching tokens records:', error)
      }
    }
    fetchTokensRecords()
  }, [])

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
          <Token idToken="teste" color="black" />
        </View>
        <View style={styles.lineConteiner}>
          <Line />
        </View>
        <View style={styles.recordsContainer}>
          <Text style={styles.title}>Histórico de Solicitações</Text>
          <View style={styles.records}>
            {tokensRecords.map((token, index) => (
              <Token key={index} idToken={token} color="black" />
            ))}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
