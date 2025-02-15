"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import PaymentSelector from '../../components/Payment/PaymentSelector'

function Payment() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const amount = searchParams.get('amount')

  const handlePaymentComplete = (result) => {
    if (result.success) {
      // Redirect to a success page or booking confirmation
      router.push(`/booking/success?transactionId=${result.transactionId}`)
    }
  }

  return (
    <div className="min-h-screen bg-[#bd3839] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Complete Your Payment
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Choose your preferred payment method
          </p>
        </div>

        <PaymentSelector 
          amount={amount} 
          onPaymentComplete={handlePaymentComplete}
        />
      </div>
    </div>
  )
}

export default Payment