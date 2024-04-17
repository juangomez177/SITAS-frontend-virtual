import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange(Number(event.target.value));
  };

  return (
    <div className="flex items-center justify-center p-3">
      {/* Page size selector */}
      <div className="mr-4">
        <label htmlFor="pageSize" className="mr-2 text-sm font-medium text-gray-700">
          Show
        </label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
          className="px-2 py-1 border border-gray-300 rounded-md text-sm bg-white"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 mx-1 text-sm font-medium text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-gray-50 disabled:border-gray-200"
      >
        Previous
      </button>
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          disabled={number === currentPage}
          className={`px-4 py-2 mx-1 text-sm font-medium ${number === currentPage ? 'text-gray-300 bg-gray-50 border-gray-200' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100'} rounded-md`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 mx-1 text-sm font-medium text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-gray-50 disabled:border-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
