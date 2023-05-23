import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface TokenProps {
  token: string
  color: string
}

export default function Token(props: TokenProps) {
  return (
    <View style={[styles.tokenContainer, { backgroundColor: '#FFFFFF' }]}>
      <Text style={[styles.tokenText, { color: props.color }]}>
        {props.token}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tokenContainer: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
