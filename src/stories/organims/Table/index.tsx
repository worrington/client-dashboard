import React, { useState, useEffect } from 'react';
import TableHead from '../../molecules/TableHeader';
import TableBody from '../../molecules/TableBody';
import TableRow from '../../molecules/TableRow';
import TableCell from '../../molecules/TableCell';
import { TableProps, TableRowData } from './types';

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [displayData, setDisplayData] = useState<TableRowData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(10);

  useEffect(() => {
    let sortedData = [...data];

    // Apply sorting
    if (sortKey) {
      sortedData.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Apply filtering
    const filteredData = sortedData.filter(row =>
      Object.keys(filters).every(key => row[key]?.toString().includes(filters[key]))
    );

    // Apply pagination
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    setDisplayData(paginatedData);
  }, [data, sortKey, sortOrder, filters, currentPage, rowsPerPage]);

  const handleSort = (key: string) => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
    setCurrentPage(1);
  };

  return (
    <div>
      <table>
        <TableHead
          columns={columns}
          onSort={handleSort}
          onFilterChange={handleFilterChange}
        />
        <TableBody>
          {displayData.map((row, index) => (
            <TableRow key={index}>
              {columns.map(column => (
                <TableCell key={column.key}>
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </table>

      {/*TODO: Pagination Controls */}
    </div>
  );
};

export default Table;
