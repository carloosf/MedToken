import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

interface BackgroundProps {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
<<<<<<< HEAD
    <View style={styles.background}>{children}
      <StatusBar barStyle='default'/>
    </View>

  )
}
=======
    <View style={styles.background}>
      {children}
    <StatusBar/>
    </View>
)}
>>>>>>> 7fabee42e87508317c0cbcefbbdddbe52ce7d3e5

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293645',
  },
})
