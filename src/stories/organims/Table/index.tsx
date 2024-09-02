import React, { useState, useEffect } from 'react';
import TableHead from '../TableHeader';
import TableBody from '../../molecules/TableBody';
import TableRow from '../../molecules/TableRow';
import TableCell from '../../molecules/TableCell';
import Pagination from '../Pagination';
import { TableProps, TableRowData } from './types';

/**
 * Table component to display tabular data with sorting, filtering, and pagination.
 *
 * @param {TableProps} props - The props for the Table component.
 * @param {TableRowData[]} props.data - The data to be displayed in the table.
 * @param {Array<{ key: string; label: string; }>} props.columns - The column definitions.
 *
 * @returns {JSX.Element} The rendered table component.
 */
const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [displayData, setDisplayData] = useState<TableRowData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 10; // Fixed number of rows per page

  // Effect to handle sorting, filtering, and pagination
  useEffect(() => {
    const sortedData = sortData([...data]);
    const filteredData = filterData(sortedData);
    const paginatedData = paginateData(filteredData);
    setDisplayData(paginatedData);
  }, [data, sortKey, sortOrder, filters, currentPage]);

  /**
   * Sort data based on the current sortKey and sortOrder.
   *
   * @param {TableRowData[]} data - The data to be sorted.
   * @returns {TableRowData[]} - The sorted data.
   */
  const sortData = (data: TableRowData[]): TableRowData[] => {
    if (!sortKey) return data;
    return data.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  };

  /**
   * Filter data based on the current filters.
   *
   * @param {TableRowData[]} data - The data to be filtered.
   * @returns {TableRowData[]} - The filtered data.
   */
  const filterData = (data: TableRowData[]): TableRowData[] => {
    return data.filter(row =>
      Object.keys(filters).every(key => row[key]?.toString().includes(filters[key]))
    );
  };

  /**
   * Paginate the filtered data based on the current page and rows per page.
   *
   * @param {TableRowData[]} data - The data to be paginated.
   * @returns {TableRowData[]} - The paginated data.
   */
  const paginateData = (data: TableRowData[]): TableRowData[] => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
  };

  /**
   * Handle the sorting of the table data.
   *
   * @param {string} key - The key to sort by.
   */
  const handleSort = (key: string) => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
  };

  /**
   * Handle changes in the filters.
   *
   * @param {string} key - The filter key.
   * @param {string} value - The filter value.
   */
  const handleFilterChange = (key: string, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  /**
   * Handle page changes in pagination.
   *
   * @param {number} page - The page number to change to.
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-full'>
      <table className='w-full'>
        <TableHead
          columns={columns}
          onSort={handleSort}
          onFilterChange={handleFilterChange}
          sortKey={sortKey}
          sortOrder={sortOrder}
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
        <tfoot>
          <TableRow className='border-none'>
            <TableCell colSpan={columns.length}>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(data.length / rowsPerPage)}
                onPageChange={handlePageChange}
              />
            </TableCell>
          </TableRow>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
