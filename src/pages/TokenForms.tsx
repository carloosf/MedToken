/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
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
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import ModalDropdown from 'react-native-modal-dropdown'

// Componentes
import Button from '../components/Button'
import StylesTokenForms from '../styles/Styles.TokenForms'
import TokenData from '../models/Model.Token'

// Handlers
import Data from '../handlers/handlerData'
import AddToken from '../handlers/AddToken'
import TokenIDCreate from '../handlers/tokenIDCreate'
import handlerPrioridade from '../handlers/handlerPrioridade'

const styles = StylesTokenForms

export default function TokenForms() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setIsLoading] = useState(false)
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']

  const [name, setName] = useState('')
  const [tipoToken, setTipoToken] = useState('')

  const handlerButton = async () => {
    const token = await TokenIDCreate(tipoToken, Data)
    const prioridade = handlerPrioridade(tipoToken)
    const date = Data(true)

    const dados: TokenData = {
      token,
      name,
      date,
      prioridade,
    }

    await AddToken(dados)
  }

  const handleNameChange = (text) => {
    setName(text)
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
