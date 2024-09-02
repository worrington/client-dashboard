import React, { useState, MouseEvent } from 'react';
import { TableHeadProps } from './types';
import Icon from '../../molecules/Icon';
import { Button } from '../../molecules/Button';

interface FilterOption {
  value: string;
  label: string;
}

/**
 * TableHead component for displaying table headers with sorting and filtering capabilities.
 * 
 * @param {TableHeadProps} props - The props for the TableHead component.
 * @param {Array<{ key: string; label: string; sortable?: boolean; filterable?: boolean; options?: FilterOption[] }>} props.columns - The column definitions.
 * @param {(key: string) => void} props.onSort - Function to handle column sorting.
 * @param {string | null} props.sortKey - The key of the currently sorted column.
 * 
 * @returns {JSX.Element} The rendered TableHead component.
 */
const TableHead: React.FC<TableHeadProps> = ({
  columns,
  onSort,
  sortKey,
}) => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [visibleFilter, setVisibleFilter] = useState<string | null>(null);

  /**
   * Handle filter selection and apply the filter.
   * 
   * @param {string} key - The key of the column to filter.
   * @param {string} value - The filter value.
   */
  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    const column = columns.find(col => col.key === key);
    if (column?.onFilter) {
      column.onFilter(value);
    }
    setVisibleFilter(null);
  };

  /**
   * Toggle the visibility of the filter menu.
   * 
   * @param {string} key - The key of the column whose filter menu should be toggled.
   * @param {MouseEvent<HTMLButtonElement>} event - The click event.
   */
  const toggleFilterVisibility = (key: string, event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setVisibleFilter(prev => (prev === key ? null : key));
  };

  return (
    <thead className="border border-grey bg-grey">
      <tr>
        {columns.map(column => (
          <th
            key={column.key}
            className="px-6 py-3 text-left font-normal tracking-wider cursor-pointer relative"
            onClick={() => column.sortable && onSort(column.key)}
          >
            <div className="flex justify-between items-center space-x-2">
              <span>{column.label}</span>

              {column.sortable && sortKey === column.key && (
                <Icon name='ChevronUpDownIcon' color='light'/>
              )}

              {column.filterable && column.options && column.options.length > 0 && (
                <div className="relative">
                  <Button
                    icon={<Icon name='FunnelIcon' color='body-light' variant='solid'/>}
                    label=''
                    onClick={(e) => toggleFilterVisibility(column.key, e)}
                  />
                  
                  {visibleFilter === column.key && (
                    <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                      {column.options.map((option: FilterOption) => (
                        <div
                          key={option.value}
                          className={`p-2 cursor-pointer hover:bg-grey ${filters[column.key] === option.value ? 'bg-gray-200' : ''}`}
                          onClick={() => handleFilterChange(column.key, option.value)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
