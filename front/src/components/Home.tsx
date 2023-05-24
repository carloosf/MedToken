import React from 'react'
import Token from './Token'
import { Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'

export default function Home() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo-ofc.png')} />
        <Token token="teste" color="teste" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#fff',
    padding: 16,
    width: 200,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textBtn: {
    color: '#4F4343',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Oswald_400Regular',
  },
  container: {
    borderBottomColor: '#fff',
    borderBottomWidth: 100,
    borderBottom: 1,
  },
})
