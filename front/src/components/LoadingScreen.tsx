import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import Background from './Background'

export default function LoadingScreen() {
  return (
    <Background>
      <Text style={styles.loadingText}>
        Olá, seja bem-vindo(a) ao MedToken. Aguarde para inserir alguns dados
        antes de receber um token de pré-atendimento
      </Text>
    </Background>
  )
}

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '80%',
    color: 'white',
  },
})
