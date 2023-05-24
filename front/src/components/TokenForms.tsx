import React from 'react'
import { StyleSheet, View, TextInput, Button, Image } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'

export default function TokenForms() {
  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo-ofc.png')} />
        <View>
          <TextInput
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Digite seu nome aqui"
          />

          <Button style={styles.send} title="Solicitar token" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  send: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: 80,
    height: 30,
    color: 'white',
    fontFamily: 'Oswald_400Regular',
    fontSize: 15,
    tintColor: 'black',
    backgroundColor: '#fff',
  },
})
