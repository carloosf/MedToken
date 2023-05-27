export default async function GetMedtoken() {
  try {
    const response = await fetch('https://medtoken-api.onrender.com/')
    if (response.ok) {
      const data = await response.json()
      const tokens = data.tokens || []
      const status = response.status
      return [tokens, status]
    } else {
      console.error('Error GET:', response.status)
      return []
    }
  } catch (error) {
    console.error('Error GET:', error)
    return []
  }
}
