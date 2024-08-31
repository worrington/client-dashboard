import React from 'react';
import classNames from 'classnames';
import { BadgeProps } from './types';
import { classMap } from '../../constans';

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'primary',
  ...props
}) => {
  // Retrieve the classes for the given color
  const getClasses = classMap[color].contained || 'bg-default text-default';

  // Base classes for all buttons
  const baseClasses = classNames(
    'rounded',
    'px-4',
    'py-1',
    getClasses
  );

  return (
    <span
      className={baseClasses}
      {...props}
    >
      {label}
    </span>
  );
};

