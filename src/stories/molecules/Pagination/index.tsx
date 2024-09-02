import React from 'react';
import { Button } from '../Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'grey' | 'light';
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  color = 'grey',
}) => {
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
          variant={currentPage === index + 1 ? 'contained' : "text"}
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
