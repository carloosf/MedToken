/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
// eslint-disable-next-line camelcase
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import ModalDropdown from 'react-native-modal-dropdown'
import { useNavigation, CommonActions } from '@react-navigation/native'

import Button from '../components/Button'

export default function TokenForms() {
  const [loading, setIsLoading] = useState(false)
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']
  const [nome, setNome] = useState('')
  const [ficha, setFicha] = useState('')
  const dataAtual = new Date()
  const navigation = useNavigation()

  const day = ('0' + dataAtual.getDate()).slice(-2)
  const month = ('0' + (dataAtual.getMonth() + 1)).slice(-2)
  const year = dataAtual.getFullYear()
  const dataFormatada = `${day}/${month}/${year}`

  const data = {
    token: '150a646',
    nome,
    tipoExame: ficha,
    data: dataFormatada,
  }

  const handlerButton = function () {
    setIsLoading(true)
    console.log(data)

    fetch('http://192.168.1.16:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data)
        if (data.status === 201) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            }),
          )
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

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
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#293645" />
        <Text style={styles.title}> Solicitação de Token </Text>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Nome:</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor="#7E998D"
                autoComplete="name"
                autoCapitalize="words"
                placeholder="Digite seu nome aqui"
                onChangeText={handleNomeChange}
              />
            </View>
            <View>
              <Text style={styles.label}>Opção de Atendimento:</Text>
              <ModalDropdown
                options={dropdownOptions}
                defaultValue="Selecione uma opção..."
                style={[styles.input]}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownContainer}
                dropdownTextStyle={styles.dropdownItemText}
                onSelect={handleDropdownSelect}
              />
            </View>
            <Button isLoading={loading} onPress={handlerButton} />
          </View>
          <View style={styles.logo}>
            <Image source={require('../../assets/images/logo-ofc.png')} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    padding: '10%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    margin: '10%',
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  input: {
    backgroundColor: 'white',
    width: 250,
    fontSize: 20,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 19,
    justifyContent: 'center',
    color: 'black',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    borderColor: 'gray',
  },
  dropdownItemText: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 23,
    fontFamily: 'Oswald_400Regular',
  },
  label: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-start',
    fontFamily: 'Oswald_400Regular',
  },
  logo: {
    marginTop: 40,
    alignSelf: 'center',
  },
})
