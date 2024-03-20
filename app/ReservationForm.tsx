"use client";

import React, { useState } from 'react';

function ReservationForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cedula, setCedula] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre && apellido && email && telefono && cedula) {
      setMensaje('¡Reserva confirmada!');
    } else {
      setMensaje('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Reserva de Vuelo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="nombre" className="block">
          Nombre:
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
            required
          />
        </label>

        <label htmlFor="apellido" className="block">
          Apellido:
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
            required
          />
        </label>

        <label htmlFor="email" className="block">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
            required
          />
        </label>

        <label htmlFor="telefono" className="block">
          Teléfono:
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
            required
          />
        </label>

        <label htmlFor="cedula" className="block">
          Número de Cédula:
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Reservar Vuelo
        </button>
      </form>
      <div className="mt-4">{mensaje}</div>
    </div>
  );
}

export default ReservationForm;