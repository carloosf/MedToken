import Token from ''
import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import LoadingScreen from './src/components/LoadingScreen'

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View>
          <Text className="text-5xl font-bold text-zinc-50">hellWorl</Text>
          <StatusBar style="light" translucent />
        </View>
      )}
    </View>
  )
}
