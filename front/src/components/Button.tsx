import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
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
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.textBtn}>
        Solicitar Token
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
   btnStyle: {
    backgroundColor: '#fff',
    padding: 16,
    width: 200,
    alignItems: 'center'
  },
   textBtn: {
    color: '#4F4343'
  },
})
