import React from 'react';
import { TableCellProps } from './types';

/**
 * TableCell Component
 * 
 * This is a functional component that represents a cell in a table row. 
 * The `TableCell` wraps the elements passed as `children` inside a `<td>
 * tag of a table.
 * 
 */
const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return (
    <td className="px-6 py-4">
      {children}
    </td>
  );
};

export default TableCell;
