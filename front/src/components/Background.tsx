import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

interface BackgroundProps {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
<<<<<<< Updated upstream
    <View style={styles.background}>
      {children}
    <StatusBar/>
    </View>
=======
    <View style={styles.background}>{children}
      <StatusBar barStyle='default'/>
    </View>

>>>>>>> Stashed changes
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293645',
  },
})
