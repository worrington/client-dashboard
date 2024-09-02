import React from 'react';
import { TableRowProps } from './types';

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  return (
    <tr className='border-b border-grey'{...props}>
      {children}
    </tr>
  );
};

export default TableRow;
