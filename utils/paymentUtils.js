import { useAuth } from '@clerk/nextjs'

export const processPayment = async ({ amount, cryptoType }) => {
  const { getToken } = useAuth()
  
  try {
    // Get the authentication token from Clerk
    const token = await getToken()
    
    // Here you would integrate with your backend to process the payment
    // through the user's Clerk wallet using their preferred crypto
    const response = await fetch('/api/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount,
        cryptoType, // 'lisk' or 'mantle'
        timestamp: new Date().toISOString(),
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Payment failed')
    }

    return {
      success: true,
      transactionId: data.transactionId,
      cryptoType,
      amount,
      timestamp: data.timestamp
    }
  } catch (error) {
    console.error('Payment processing error:', error)
    throw error
  }
}

export const formatCryptoAmount = (amount, cryptoType) => {
  // Add any specific formatting logic for different crypto types
  return `${amount} ${cryptoType.toUpperCase()}`
}
