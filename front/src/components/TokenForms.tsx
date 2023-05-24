import React from 'react'
import { StyleSheet, View, TextInput, Button, Image } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import RNPickerSelect from 'react-native-picker-select'

export default function TokenForms() {
  const [fontLoaded] = useFonts({
    Oswald_400Regular
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <View>
        <Image source={require('../../assets/images/logo-ofc.png')} />
        <View>
          <TextInput
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Digite seu nome aqui"
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Token Prioritário', value: 'Token prioritário' },
              { label: 'Token Geral', value: 'Token prioritário' },
              { label: 'Token Exames', value: 'Token prioritário' },
            ]}
          />
        </View>
        <View style={styles.send}>
          <Button title="Solicitar token" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  send: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: 300,
    color: 'white',
    fontFamily: 'Oswald_400Regular',
    fontSize: 15,
    backgroundColor: '#fff',
  },
})
