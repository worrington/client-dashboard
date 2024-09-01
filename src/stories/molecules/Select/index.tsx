// Select.tsx
import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, className = '' }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`p-2 rounded ${className}`}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
