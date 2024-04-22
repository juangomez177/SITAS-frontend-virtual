// Table.tsx
import { Flight, FlightsResponse } from "app/api/gestion/gestion"
import { Action, FlightOperation } from "app/gestion/lista/page"
import Pagination from "components/atoms/Pagination/Pagination"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

type TableProps = {
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
  pagination: {
    page: number
    size: number
  }
  setPagination: Dispatch<
    SetStateAction<{
      page: number
      size: number
    }>
  >
  flightsResponse: FlightsResponse
}

const Table: React.FC<TableProps> = ({ setCurrentOperation, pagination, setPagination, flightsResponse }) => {
  const { page, size } = pagination

  const { vuelos, totalItems } = flightsResponse

  const handleOpenModal = (id: number, action: Action): void => {
    setCurrentOperation({
      id,
      action,
    })
  }

  const handlePageChange = (page: number): void => {
    setPagination((prev) => ({
      ...prev,
      page,
    }))
  }

  const handleSizeChange = (size: number): void => {
    setPagination({
      page: 0,
      size,
    })
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    return new Date(date).toLocaleDateString("es-ES", options)
  }

  if (totalItems === 0)
    return (
      <div className="alert container mx-auto rounded-lg bg-blue-400 p-5 text-center text-white">No hay vuelos</div>
    )

  return (
    <React.Fragment>
      <div className="mb-32 overflow-x-auto px-10">
        <table>
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                N° vuelo
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Tipo de Vuelo
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Aeropuerto Origen
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Aeropuerto Destino
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Tipo de Avión
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Fecha de Salida
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Fecha de Llegada
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Precio
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Cantidad de Pasajeros
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Sobretasa
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Porcentaje de Impuestos
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {vuelos.map((row, index) => (
              <tr key={index}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.numeroVuelo}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.tipoVuelo}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.idAeropuertoDestino}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.idAeropuertoOrigen}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.idTipoAvion}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{formatDate(row.fechaSalida)}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{formatDate(row.fechaLlegada)}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.precio}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.cantidadPasajeros}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.sobretasa}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.porcentajeImpuestos}</td>
                <td className="flex flex-col space-y-2 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <button
                    onClick={() => handleOpenModal(row.id!, "UPDATE")}
                    className=" mx-1 rounded-full border-l bg-blue-500 px-5 py-2 text-white"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleOpenModal(row.id!, "UPDATE")}
                    className=" mx-1 rounded-full border-l bg-yellow-500 px-5 py-2 text-white"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleOpenModal(row.id!, "DELETE")}
                    className="bold mx-1 rounded-full bg-red-500 px-5 py-2 text-white"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={page}
          totalCount={totalItems}
          pageSize={size}
          onPageChange={handlePageChange}
          onPageSizeChange={handleSizeChange}
          pageSizeOptions={[5, 10, 15, 20]}
        />
      </div>
    </React.Fragment>
  )
}

export default Table
