/* eslint-disable camelcase */
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
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import ModalDropdown from 'react-native-modal-dropdown'
// import { useNavigation, CommonActions } from '@react-navigation/native'
import Button from '../components/Button'
import Data from '../handlers/dataAtual'
import HandlerToken from '../handlers/handlerToken'
import AddToken from '../handlers/AddToken'

export default function TokenForms() {
  const [loading, setIsLoading] = useState(false)
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']

  const [nome, setNome] = useState('')
  const [tipoToken, setTipoToken] = useState('')

  const dados = [HandlerToken(tipoToken), nome, tipoToken, Data]

  // const navigation = useNavigation()

  const handlerButton = async function () {
    setIsLoading(true)
    AddToken({ dados })
    /* if (dados === 201) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        }),
      )
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) */
  }

  const handleNameChange = (text) => {
    setNome(text)
  }
  const handleDropdownSelect = (index, value) => {
    setTipoToken(value)
  }

  const [fontLoaded] = useFonts({
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
                onChangeText={handleNameChange}
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
          <Image
            source={require('../../assets/images/logo-ofc.png')}
            style={styles.logo}
          />
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
    marginBottom: '20%',
    marginTop: '10%',
    height: 350,
    alignItems: 'center',
    gap: 10,
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
    fontSize: 30,
    fontFamily: 'Oswald_400Regular',
  },
  label: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-start',
    fontFamily: 'Oswald_400Regular',
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
})
