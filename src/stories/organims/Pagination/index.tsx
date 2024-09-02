import React from 'react';
import { Button } from '../../molecules/Button';

export interface PaginationProps {
  /** The current page number. */
  currentPage: number;
  
  /** The total number of pages available. */
  totalPages: number;
  
  /** Callback function to handle page changes. * 
   * @param {number} page - The new page number to switch to.
   */
  onPageChange: (page: number) => void;
  
  /** The color variant for the pagination buttons.
   * @default 'grey'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'grey' | 'light';
}

/**
 * Pagination component to navigate between pages of content.
 * 
 * @param {PaginationProps} props - The props for the Pagination component.
 * @returns {JSX.Element} The rendered Pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  color = 'grey',
}) => {
  
  /** Handle page number changes.
   * @param {number} page - The page number to navigate to.
   */
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="text-center space-x-2">
      <Button
        label="<"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        color={color}
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          label={`${index + 1}`}
          onClick={() => handlePageChange(index + 1)}
          color={color}
          variant={currentPage === index + 1 ? 'contained' : 'text'}
        />
      ))}
      <Button
        label=">"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        color={color}
      />
    </div>
  );
};

export default Pagination;
