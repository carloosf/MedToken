import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import Background from './Background'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'

export default function LoadingScreen() {
  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <Background>
        <Image
          style={styles.logoMedToken}
          source={require('../../assets/images/logo-ofc.png')}
        />
        <Text style={styles.loadingText}>
          Olá, seja bem-vindo(a) ao MedToken. Aguarde para inserir alguns dados
          antes de receber um token de pré-atendimento
        </Text>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: 300,
    color: 'white',
    fontFamily: 'Oswald_400Regular',
    fontSize: 15,
  },
  logoMedToken: {
    marginBottom: 15,
    width: 20,
  },
})
