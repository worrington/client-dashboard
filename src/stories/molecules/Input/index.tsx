import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

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
