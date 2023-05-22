import { View, Text } from 'react-native'

interface TokenProps{
    token: string
}
export default function Token(props) {
  return (
    <View>
      <Text>{props.token}</Text>
    </View>
  )
}
