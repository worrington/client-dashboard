import React from 'react';
import { TableHeadProps } from './types';

const TableHead: React.FC<TableHeadProps> = ({ columns, onSort, onFilterChange }) => {
  return (
    <thead className="border border-grey bg-grey">
      <tr>
        {columns.map(column => (
          <th
            key={column.key}
            className="px-6 py-3 text-left font-normal tracking-wider cursor-pointer"
            onClick={() => column.sortable && onSort(column.key)}
          >
            {column.label}
            {column.sortable && (
              <span className="ml-2">
                {/*TODO: Display sort direction indicator*/}
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
