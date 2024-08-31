import React from 'react';
import { TableRowProps } from './types';

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr className="hover:bg-gray-100">
      {children}
    </tr>
  );
};

export default TableRow;
