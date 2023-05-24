import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'

interface ButtonProps {
  onPress: () => void
  isLoading?: boolean
}

export default function LoadingScreen({ onPress, isLoading = false }: ButtonProps) {
  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <TouchableOpacity
        disabled={isLoading}
        onPress={onPress}
        style={styles.btnStyle}
      >
        {isLoading ? (
          <ActivityIndicator color="#4F4343" />
        ) : (
          <Text style={styles.textBtn}>Solicitar Token</Text>
        )}
      </TouchableOpacity>
    )
  }
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
})
