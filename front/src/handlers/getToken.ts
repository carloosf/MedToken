export default async function GetToken(BASE_URL: String) {
  return await fetch(`${BASE_URL}/token`)
    .then((response) => response.json())
    .then((data) => {
      console.log('Response:', data)
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
