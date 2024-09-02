import React from 'react';
import * as HeroIconsOutline from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
import { IconProps } from './types';


/**
 * `Icon` is a reusable React component that renders an icon from the 
 * `@heroicons/react` library. This component allows for customization 
 * of the icon's size, color, and additional styles.
 */
const Icon: React.FC<IconProps> = ({ name,
  className = '',
  color = "primary",
  width = 24,
  height = 24,
  variant = "outline",
}) => {

  const IconComponent = variant === "outline" ? HeroIconsOutline[name] : HeroIconsSolid[name];

  if (!IconComponent) {
    console.warn(`Icon with name ${name} does not exist.`);
    return null;
  }

  return (
    <IconComponent className={`${className} text-${color}`} style={{
      width: width,
      height: height,
    }}/>
  );
};

export default Icon;
