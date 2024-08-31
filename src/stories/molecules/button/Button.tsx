import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';
import { buttonClassMap } from './constans';

/**
 * Button Component
 * 
 * This is the primary UI component for user interaction.
 * The `Button` component can be customized with different variants, colors, and sizes.
*/
export const Button: React.FC<ButtonProps> = ({
  label,
  color = 'primary',
  variant = 'text',
  ...props
}) => {
  // Retrieve the classes for the given color and variant from the buttonClassMap
  const getClasses = buttonClassMap[color][variant];

  // Base classes for all buttons
  const baseClasses = classNames(
    'rounded',
    'px-4',
    'py-1',
    getClasses
  );

  return (
    <button
      type="button"
      className={baseClasses}
      {...props}
    >
      {label}
    </button>
  );
};
