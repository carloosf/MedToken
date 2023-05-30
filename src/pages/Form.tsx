/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
// Dependencias
import React, { useState } from 'react'
import {
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [tipoToken, setTipoToken] = useState('')
  const [selectedButton, setSelectedButton] = useState('')

  const handlerButton = async () => {
    try {
      setIsLoading(true)
      const token = await TokenIDCreate(tipoToken)
      setToken(token)
      navigation.navigate('Home', { token, name })

      const prioridade = handlerPrioridade(tipoToken)
      const date = Data(true)

      const dados: TokenData = {
        token,
        name,
        date,
        prioridade,
      }

      await SetMedtoken(dados)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } catch (err) {
      console.error('ERROR FORMS:' + err)
    }
  }

  const handleNameChange = (text: React.SetStateAction<string>) => {
    setName(text)
  }

  const handleDropdownSelect = (value) => {
    setTipoToken(value)
    setSelectedButton(value)
    console.log(tipoToken)
  }

  const handlerButtonHome = () => {
    navigation.navigate('Home')
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
        <KeyboardAvoidingView
          behavior="height"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
        >
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
              <View>
                <View style={styles.tipoAtendimentoContainer}>
                  <Text style={styles.label}>Opção de Atendimento:</Text>
                  <View style={styles.optionContainer}>
                    <TouchableOpacity
                      style={[
                        styles.btnStyle,
                        selectedButton === 'Exame' && styles.selectedButton,
                      ]}
                      onPress={() => handleDropdownSelect('Exame')}
                    >
                      <Text
                        style={[
                          styles.textBtn,
                          selectedButton === 'Exame' &&
                            styles.selectedButtonText,
                        ]}
                      >
                        Exame
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.btnStyle,
                        selectedButton === 'Geral' && styles.selectedButton,
                      ]}
                      onPress={() => handleDropdownSelect('Geral')}
                    >
                      <Text
                        style={[
                          styles.textBtn,
                          selectedButton === 'Geral' &&
                            styles.selectedButtonText,
                        ]}
                      >
                        Geral
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.btnStyle,
                        selectedButton === 'Preferencial' &&
                          styles.selectedButton,
                      ]}
                      onPress={() => handleDropdownSelect('Preferencial')}
                    >
                      <Text
                        style={[
                          styles.textBtn,
                          selectedButton === 'Preferencial' &&
                            styles.selectedButtonText,
                        ]}
                      >
                        Preferencial
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Button
                title={'Solicitar Token'}
                isLoading={loading}
                onPress={handlerButton}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Image
          source={require('../../assets/images/logo-ofc.png')}
          style={styles.logo}
        />
        <Button
          isLoading={loading}
          title={'Convidado'}
          onPress={handlerButtonHome}
        />
      </SafeAreaView>
    )
  }
}
