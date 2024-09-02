import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

/**
 * Props for the `Select` component.
 */
interface SelectProps {
   /** The currently selected value. */
  value: string;
   /**  Callback function to handle the change event when a new option is selected. */
   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
   /** An array of options to be displayed in the dropdown. */
   options: SelectOption[];
   /** Optional additional CSS classes to apply to the select element. */
   className?: string;
 }

/**
 * `Select` is a dropdown component that allows users to select an option
 * from a predefined list. It supports custom styling via the `className
 *  prop and handles option selection through the `onChange` callback.
 */
const Select: React.FC<SelectProps> = ({
  value,
  options,
  className = '',
  onChange,
}) => {
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
