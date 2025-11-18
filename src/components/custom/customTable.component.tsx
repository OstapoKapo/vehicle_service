'use client';

import { CustomTableProps } from "@/types/customTable.type";

export const CustomTable = <T extends { id: string | number }>({ 
  data, 
  columns, 
  isLoading, 
  currentPage, 
  totalPages, 
  onPageChange 
}: CustomTableProps<T>) => {
  if (isLoading) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-gray-500">
        Завантаження даних...
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-gray-500 border rounded-lg">
        Даних немає
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, index) => (
                <th 
                  key={index} 
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${col.className || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, rowIndex) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors"> 
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {col.render(item, rowIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center px-2">
        <span className="text-sm text-gray-600">
          Сторінка <span className="font-medium">{currentPage}</span> з <span className="font-medium">{totalPages}</span>
        </span>
        
        <div className="flex gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Назад
          </button>
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};