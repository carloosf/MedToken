/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// eslint-disable-next-line camelcase
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'

interface TokenProps {
  idToken: string
  color: string
}

export default function Token(props: TokenProps) {
  const [fontLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Oswald_400Regular,
  })

  const [listToken, setListToken] = useState([
    ['202205P04', '02/05/2023'],
    ['202205P02', '02/05/2023'],
    ['202205P02', '02/05/2023'],
  ])

  if (!fontLoaded) {
    return null
  } else {
    return (
      <View style={styles.tokenContainer}>
        <Text style={[styles.tokenText, { color: props.color }]}>
          {props.idToken}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tokenContainer: {
    backgroundColor: '#fff',
    width: '70%',
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Oswald_400Regular',
  },
})
