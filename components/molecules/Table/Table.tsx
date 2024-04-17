// Table.tsx
import { Action, FlightOperation } from "app/gestion/lista/page"
import Pagination from "components/atoms/Pagination/Pagination"
import React, { Dispatch, SetStateAction, useState } from "react"
import dummyFlightsData from "./dummyFlightsData.json"

interface RowData {
  id: number
  flightNumber: string
  originCity: string
  destinationCity: string
  aircraftCode: string
  flightType: string
  actions: string
}

const rows: RowData[] = dummyFlightsData

type TableProps = {
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
}

const Table: React.FC<TableProps> = ({ setCurrentOperation }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const [pageSize, setPageSize] = useState(5)
  const pageSizeOptions = [5, 10, 15, 20]
  const currentTableData = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const handleOpenModal = (id: number, action: Action): void => {
    setCurrentOperation({
      id,
      action,
    })
  }

  return (
    <React.Fragment>
      <div className="overflow-x-auto px-20">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                N° vuelo
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Ciudad de origen
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Ciudad de destino
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Codigo de avion
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Tipo de vuelo
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((row, index) => (
              <tr key={index}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.flightNumber}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.originCity}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.destinationCity}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.aircraftCode}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{row.flightType}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <button
                    onClick={() => handleOpenModal(row.id, "UPDATE")}
                    className=" mx-1 rounded-full border-l bg-blue-500 px-5 py-2 text-white"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleOpenModal(row.id, "DELETE")}
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
          currentPage={currentPage}
          totalCount={rows.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(newSize) => setPageSize(newSize)}
          pageSizeOptions={pageSizeOptions}
        />
      </div>
    </React.Fragment>
  )
}

export default Table
