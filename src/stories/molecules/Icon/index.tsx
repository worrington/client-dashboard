import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

// Define un tipo de ícono basado en las claves de HeroIcons
type IconName = keyof typeof HeroIcons;

interface IconProps {
  name: IconName; // El nombre del ícono
  className?: string; // Opcional para estilos adicionales
  width?: number;
  height?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', color = "primary", width = 24, height = 24 }) => {
  const IconComponent = HeroIcons[name];

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
