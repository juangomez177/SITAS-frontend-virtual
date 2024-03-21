"use client"
import { usePathname, useRouter } from "next/navigation"
import React, { useState } from "react"

export default function Web() {
  const router = useRouter()
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const ticketPrice = 50000
  const taxes = 36966
  const baggagePrice = 20000
  const seatPrice = 5000

  const totalTicketsAndTaxes = ticketPrice + taxes
  const totalAdditionalCharges = baggagePrice + seatPrice
  const totalToPay = totalTicketsAndTaxes + totalAdditionalCharges

  const handleStartPayment = () => {
    if (!selectedPaymentOption) {
      setErrorMessage("Debes seleccionar un método de pago.")
      setTimeout(() => {
        setErrorMessage("")
      }, 3000)
    } else {
      if (selectedPaymentOption === "pse") {
        window.location.href = "https://www.pse.com.co/persona"
      } else {
        router.push("/pagos/tarjeta-de-credito")
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto mb-2 w-full max-w-md">
        <div className="mb-2 rounded-lg bg-white p-6">
          <h3 className="mb-2 text-lg font-bold text-black">Medios de pago</h3>
          <div className="mb-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="tarjeta"
                name="pago"
                value="tarjeta"
                checked={selectedPaymentOption === "tarjeta"}
                onChange={() => setSelectedPaymentOption("tarjeta")}
              />
              <label htmlFor="tarjeta" className="ml-2 text-base text-black">
                Tarjeta de crédito
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="pse"
                name="pago"
                value="pse"
                checked={selectedPaymentOption === "pse"}
                onChange={() => setSelectedPaymentOption("pse")}
              />
              <label htmlFor="pse" className="ml-2 text-base text-black">
                Transferencia bancaria / PSE
              </label>
            </div>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-base font-bold text-black">Total a pagar:</p>
            <p className="text-base font-bold text-black">${totalToPay.toLocaleString()}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleStartPayment}
              className="focus:shadow-outline rounded-full bg-[#0D4885] px-4 py-2 font-bold text-white hover:bg-[#09437C] focus:outline-none"
            >
              Iniciar Pago
            </button>
          </div>
          {errorMessage && <div className="mt-4 rounded-md bg-red-100 p-2 text-red-600">{errorMessage}</div>}
        </div>
      </div>
    </div>
  )
}
