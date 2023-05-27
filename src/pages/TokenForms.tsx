/* eslint-disable camelcase */
// Dependencias
import React, { useEffect, useState } from 'react'
import {
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

// Componentes
import Button from '../components/Button'
import StylesTokenForms from '../styles/Styles.TokenForms'

// Handlers
import Data from '../handlers/dataAtual'
import AddToken from '../handlers/AddToken'
import TokenIDCreate from '../handlers/tokenIDCreate'
import handlerPrioridade from '../handlers/handlerPrioridade'

const styles = StylesTokenForms

export default function TokenForms() {
  const [loading, setIsLoading] = useState(false)
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']

  const [nome, setNome] = useState('')
  const [tipoToken, setTipoToken] = useState('')

  const handlerButton = async () => {
    try {
      const token = await TokenIDCreate(tipoToken)
      const prioridade = handlerPrioridade(tipoToken)
      const date = Data(true)

      const dados = {
        token: await token,
        name: nome,
        date,
        prioridade,
      }

      const response = await AddToken({ dados })
      console.log('Response:', response)
    } catch (error) {
      console.error('Error:', error)
    }
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
                style={styles.input}
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
