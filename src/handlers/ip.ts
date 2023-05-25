import { getIpAddressAsync } from 'expo-network'

export default async function fetchIPAddress() {
  try {
    const ipAddress = await getIpAddressAsync()
    console.log('Endereço IP:', ipAddress)
  } catch (error) {
    console.error('Erro ao obter o endereço IP:', error)
  }
}
