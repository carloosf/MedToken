/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Image, Text } from 'react-native'
// eslint-disable-next-line camelcase
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import ModalDropdown from 'react-native-modal-dropdown'
import Button from './Button'

export default function TokenForms() {
  const [loading, setIsLoading] = useState(false)
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']
  const [nome, setNome] = useState('')
  const [ficha, setFicha] = useState('')
  const dataAtual = new Date()

  const day = ('0' + dataAtual.getDate()).slice(-2)
  const month = ('0' + (dataAtual.getMonth() + 1)).slice(-2)
  const year = dataAtual.getFullYear()
  const dataFormatada = `${day}/${month}/${year}`

  const data = {
    nome,
    ficha,
    dataAtual: dataFormatada,
  }

  const api = function () {
    setIsLoading(true)
    fetch('https://192.168.1.17/3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  //const handleDropdownSelect = (e){}

  const handleNomeChange = (text) => {
    setNome(text)
  }
  const handleDropdownSelect = (index, value) => {
    setFicha(value)
  }

  const [fontLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Oswald_400Regular,
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <Text> Solicitação de Token </Text>
        <View style={styles.form}>
          <TextInput
            testID="token"
            style={[styles.input, styles.inputName]}
            placeholderTextColor="#7E998D"
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Digite seu nome aqui"
            onChangeText={handleNomeChange}
          />
          <ModalDropdown
            options={dropdownOptions}
            defaultValue="Selecione uma opção..."
            style={[styles.input]}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownContainer}
            dropdownTextStyle={styles.dropdownItemText}
            onSelect={handleDropdownSelect}
          />

          <Button isLoading={loading} onPress={api} />
          <Image source={require('../../assets/images/logo-ofc.png')} />
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
  form: {
    margin: 30,
  },
  input: {
    backgroundColor: 'white',
    width: '70%',
    fontSize: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    color: '#7E998D',
  },
  inputName: {},
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    width: 200,
    borderColor: 'gray',
  },
  dropdownItemText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedItemText: {
    marginTop: 20,
    fontSize: 16,
  },
})
