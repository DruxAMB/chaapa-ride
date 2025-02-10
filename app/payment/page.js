"use client"
import { useSearchParams } from 'next/navigation'
import CheckoutForm from './../../components/Home/CheckoutForm'
import React from 'react'

function Payment() {
  const searchParam=useSearchParams();
  const amount=searchParam.get('amount');
 
  return (
    <div className='bg-white text-black p-2'>hello world</div>
  )
}

export default Payment