"use client"
import { useSearchParams } from 'next/navigation'
import CheckoutForm from '../../components/Home/CheckoutForm'
import React from 'react'

function Payment() {
  const searchParam=useSearchParams();
  const amount=searchParam.get('amount');
 
  return (
    <div className='bg-white text-black p-2'>
      <button className='bg-black text-white p-2 rounded-lg'>Pay with Lisk</button>
    </div>
  )
}

export default Payment