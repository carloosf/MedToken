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
import { useNavigation } from '@react-navigation/native'

// Componentes
import Button from '../components/Button'
import StylesForm from '../styles/Styles.Form'
import TokenData from '../models/Model.Token'

// Handlers
import Data from '../handlers/handlerData'

import TokenIDCreate from '../handlers/tokenIDCreate'
import handlerPrioridade from '../handlers/handlerPrioridade'
import SetMedtoken from '../services/SetMedtoken'

const styles = StylesForm

export default function Form() {
  const [loading, setIsLoading] = useState(false)
  const navigation = useNavigation()
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']

  const [name, setName] = useState('')
  const [tipoToken, setTipoToken] = useState('')
  const [token, setToken] = useState('')

  const handlerButton = async () => {
    try {
      setIsLoading(true)
      const token = await TokenIDCreate(tipoToken)
      setToken(token)
      navigation.navigate('Home', token)

      const prioridade = handlerPrioridade(tipoToken)
      const date = Data(true)

      const dados: TokenData = {
        token,
        name,
        date,
        prioridade,
      }

      const response = await SetMedtoken(dados)
      console.log(response)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } catch (err) {
      console.log('ERROR FORMS:' + err)
    }
  }

  const handleNameChange = (text) => {
    setName(text)
  }

  const handleDropdownSelect = (index, value) => {
    setTipoToken(value)
  }

  const handlerButtonHome = () => {
    navigation.navigate('Home', token)
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
            <Button
              title={'Solicitar Token'}
              isLoading={loading}
              onPress={handlerButton}
            />
          </View>
          <Image
            source={require('../../assets/images/logo-ofc.png')}
            style={styles.logo}
          />
          <Button
            isLoading={loading}
            title={'Convidado'}
            onPress={handlerButtonHome}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
