const GetMedtoken = async () => {
  const response = await fetch('https://medtoken-api.onrender.com/')
  if (response.ok) {
    const data = await response.json()
    const tokens = data.tokens || []
    return [tokens]
  } else {
    console.error('Error GET:', response.status)
    return []
  }
}

export default GetMedtoken
