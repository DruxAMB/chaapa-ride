"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PaymentSelector = ({ amount, onPaymentComplete }) => {
  const [selectedCrypto, setSelectedCrypto] = useState("lisk");

  const cryptoOptions = [
    {
      id: "lisk",
      name: "Lisk",
      icon: "/lisk-icon.png", // You'll need to add this icon to your public folder
      description: "Pay with Lisk tokens",
    },
    {
      id: "mantle",
      name: "Mantle",
      icon: "/mantle-icon.png", // You'll need to add this icon to your public folder
      description: "Pay with Mantle tokens",
    },
  ];

  const handlePayment = async () => {
    try {
      // Here you would integrate with Clerk's wallet system
      // and handle the actual payment processing
      const paymentResult = await processPayment({
        amount,
        cryptoType: selectedCrypto,
      });

      if (paymentResult.success) {
        onPaymentComplete(paymentResult);
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Select Payment Method
      </h2>
      <div className="space-y-4">
        {cryptoOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedCrypto === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => setSelectedCrypto(option.id)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src={option.icon}
                  alt={option.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{option.name}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600">Amount to pay</div>
          <div className="text-2xl font-bold text-gray-500">
            {amount} {selectedCrypto.toUpperCase()}
          </div>
        </div>

        <Link href={"/payment-confirm"}>
          <button
            onClick={handlePayment}
            className="w-full bg-[#bd3839] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Pay with {selectedCrypto === "lisk" ? "Lisk" : "Mantle"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSelector;
