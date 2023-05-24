import React from 'react'
import { StyleSheet, View, TextInput, Button, Image } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import ModalDropdown from 'react-native-modal-dropdown'

export default function TokenForms() {
  const dropdownOptions = ['Preferencial', 'Geral', 'Exame']

  const handleDropdownSelect = (e) => {}

  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo-ofc.png')} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Digite seu nome aqui"
          />
          <ModalDropdown
            options={dropdownOptions}
            defaultValue="Selecione uma opção..."
            onSelect={handleDropdownSelect}
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownContainer}
            dropdownTextStyle={styles.dropdownItemText}
          />

          <Button title="Solicitar token" color={'blue'} />
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
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    width: '70%',
  },
  dropdown: {
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    width: 200,
    borderRadius: 4,
    borderWidth: 1,
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
