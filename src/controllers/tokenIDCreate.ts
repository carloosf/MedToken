import { useState } from 'react'

export default async function TokenIDCreate(tipoToken: string) {
  const [tokenID, setTokenID] = useState<string>('')

  const response = await fetch('https://medtoken-api.onrender.com/')
  const data = await response.json()

  if (response.ok) {
    const records = Array.isArray(data) ? data : []
    const latestRecords = records.slice(-5)

    setTokenID(latestRecords.map((record: any) => record.id).join(', '))
  } else {
    console.error('Error:', data)
  }

  return tokenID
}
