'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Web() {

  const router = useRouter();
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const ticketPrice = 50000;
  const taxes = 36966;
  const baggagePrice = 20000;
  const seatPrice = 5000;

  const totalTicketsAndTaxes = ticketPrice + taxes;
  const totalAdditionalCharges = baggagePrice + seatPrice;
  const totalToPay = totalTicketsAndTaxes + totalAdditionalCharges;

  const handleStartPayment = () => {
    if (!selectedPaymentOption) {
      setErrorMessage('Debes seleccionar un método de pago.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      if (selectedPaymentOption === 'pse') {
        window.location.href = 'https://www.pse.com.co/persona';
      } else {
        router.push('/pagos/tarjeta-de-credito');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="max-w-md mx-auto mb-2 w-full">
        <div className="bg-white p-6 rounded-lg mb-2">
          <h3 className="text-lg font-bold mb-2 text-black">Medios de pago</h3>
          <div className="mb-2">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="tarjeta" 
                name="pago" 
                value="tarjeta"
                checked={selectedPaymentOption === 'tarjeta'}
                onChange={() => setSelectedPaymentOption('tarjeta')}
              />
              <label htmlFor="tarjeta" className="ml-2 text-base text-black">Tarjeta de crédito</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="pse" 
                name="pago" 
                value="pse"
                checked={selectedPaymentOption === 'pse'}
                onChange={() => setSelectedPaymentOption('pse')}
              />
              <label htmlFor="pse" className="ml-2 text-base text-black">Transferencia bancaria / PSE</label>
            </div>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-base font-bold text-black">Total a pagar:</p>
            <p className="text-base font-bold text-black">${totalToPay.toLocaleString()}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleStartPayment}
              className="bg-[#0D4885] hover:bg-[#09437C] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Iniciar Pago
            </button>
          </div>
          {errorMessage && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md mt-4">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
