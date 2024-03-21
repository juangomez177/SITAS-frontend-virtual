"use client"
import React, { useState } from "react"

export default function Web() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [installments, setInstallments] = useState(1) // Estado para el número de cuotas
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Evita que el formulario se envíe de manera síncrona

    setTimeout(() => {
      setErrorMessage("Error en la red, inténtalo más tarde")
      setTimeout(() => {
        setErrorMessage("")
      }, 4000)
    }, 1000)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value
    setExpiryDate(inputDate)
    setErrorMessage("")

    // Expresión regular para validar el formato MM/AA
    const regex = /^(0[1-9]|1[0-2])\/(\d{2})$/

    if (!regex.test(inputDate)) {
      setErrorMessage("Formato de fecha de vencimiento inválido. Utilice MM/AA.")
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardNumber = e.target.value
    setCardNumber(inputCardNumber)
    setErrorMessage("")

    // Expresión regular para validar que sean exactamente 16 dígitos numéricos
    const regex = /^\d{16}$/

    if (!regex.test(inputCardNumber)) {
      setErrorMessage("El número de tarjeta debe contener exactamente 16 dígitos numéricos.")
    }
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCvv = e.target.value
    setCvv(inputCvv)
    setErrorMessage("")

    // Expresión regular para validar que sean exactamente 3 dígitos numéricos
    const regex = /^\d{3}$/

    if (!regex.test(inputCvv)) {
      setErrorMessage("El CVC debe contener exactamente 3 dígitos numéricos.")
    }
  }

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardName = e.target.value
    setCardName(inputCardName)
    setErrorMessage("")

    // Expresión regular para validar que solo contenga letras y espacios
    const regex = /^[a-zA-Z\s]*$/

    if (!regex.test(inputCardName)) {
      setErrorMessage("El nombre en la tarjeta no puede contener números ni caracteres especiales.")
    }
  }

  const handleInstallmentsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedInstallments = parseInt(e.target.value);
    setInstallments(selectedInstallments);
};


  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-bold">Pagar con tarjeta de crédito</h2>
          <div className="mb-4 flex justify-center">
            <img src="/tarjetas.png" alt="tarjeta" className="mr-2 h-20" />
          </div>
          <form onSubmit={handleSubmit}>
            <label className="mb-2 block font-bold text-gray-700" htmlFor="cardNumber">
              Número de tarjeta
            </label>
            <input
              className={`mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errorMessage ? "border-red-500" : ""
              }`}
              id="cardNumber"
              type="text"
              placeholder="Ingrese el número de su tarjeta"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />

            <label className="mb-2 block font-bold text-gray-700" htmlFor="cardName">
              Nombre en la tarjeta
            </label>
            <input
              className={`mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errorMessage ? "border-red-500" : ""
              }`}
              id="cardName"
              type="text"
              placeholder="Nombre en la tarjeta"
              value={cardName}
              onChange={handleCardNameChange}
              maxLength={40} // Define la longitud máxima
              required
            />

            <label className="mb-2 block font-bold text-gray-700" htmlFor="installments">
              Número de cuotas
            </label>
            <select
              className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="installments"
              value={installments}
              onChange={handleInstallmentsChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <label className="block font-bold text-gray-700" htmlFor="expiryDate">
                Fecha de vencimiento
              </label>
              <input
                className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errorMessage ? "border-red-500" : ""
                }`}
                id="expiryDate"
                type="text"
                placeholder="MM/AA"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                required
              />

              <label className="block font-bold text-gray-700" htmlFor="cvc">
                CVC
              </label>
              <input
                className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errorMessage ? "border-red-500" : ""
                }`}
                id="cvc"
                type="text"
                placeholder="CVC"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </div>

            {errorMessage && <div className="mb-4 text-red-600">{errorMessage}</div>}

            <div className="flex justify-center">
              <button
                type="submit"
                className="focus:shadow-outline rounded-full bg-[#0D4885] px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              >
                Realizar Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
