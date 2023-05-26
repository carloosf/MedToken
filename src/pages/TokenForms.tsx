/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */

// Dependencias
import React, { useState } from 'react'
import {
  View,
  TextInput,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import ModalDropdown from 'react-native-modal-dropdown'

// Componentes
import Button from '../components/Button'
import StylesTokenForms from '../styles/Styles.TokenForms'

// Handlers
import Data from '../handlers/dataAtual'
import AddToken from '../handlers/AddToken'
import handlerPrioridade from '../handlers/handlerPrioridade'
import TokenIDCreate from '../controllers/tokenIDCreate'
const styles = StylesTokenForms

export default function TokenForms() {
  const [loading, setIsLoading] = useState(false)
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']

  const [nome, setNome] = useState('')
  const [tipoToken, setTipoToken] = useState('')

  const navigation = useNavigation()
  const dados = {
    token: TokenIDCreate(tipoToken),
    name: nome,
    date: Data(true),
    prioridade: handlerPrioridade(tipoToken),
  }

  const handlerButton = async function () {
    setIsLoading(true)
    console.log(JSON.stringify(dados))
    try {
      const data = await AddToken({ dados })
      console.log('Response:', data)
      if (data.status === '201') {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          }),
        )
      }
    } catch (error) {
      console.error('Error:', error)
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
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
