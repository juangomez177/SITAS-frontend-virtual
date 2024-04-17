// Table.tsx
import React, { useState } from 'react';
import Pagination from 'components/atoms/Pagination/Pagination'
import dummyFlightsData from './dummyFlightsData.json'

interface RowData {
  flightNumber: string;
  originCity: string;
  destinationCity: string;
  aircraftCode: string;
  flightType: string;
  actions: string;
}

const rows: RowData[] = dummyFlightsData

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(5);
  const pageSizeOptions = [5, 10, 15, 20]; 
  const currentTableData = rows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="overflow-x-auto px-20">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              N° vuelo
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Ciudad de origen
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Ciudad de destino
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Codigo de avion
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Tipo de vuelo
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row, index) => (
           <tr key={index}>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {row.flightNumber}
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {row.originCity}
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {row.destinationCity}
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {row.aircraftCode}
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {row.flightType}
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             <button className="text-indigo-600 hover:text-indigo-900">
               {row.actions}
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
  );
};

export default Table;
