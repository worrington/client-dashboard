import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label to display above the input field.
   */
  label?: string;
}

/**
 * `Input` is a reusable form input component that allows for custom input fields
 * with an optional label. This component extends the standard HTML input element's
 * attributes, enabling you to pass any typical input properties such as `type`,
 * `placeholder`, `value`, `onChange`, etc.
 */
const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col alig-start">
      {label && <label>{label}</label>}
      <input
        className="p-2 border rounded"
        {...props}
      />
    </div>
  );
};

export default Input;
