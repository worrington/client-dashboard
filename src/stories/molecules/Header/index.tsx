import React from 'react';

import './header.css';
import Icon from '../Icon';

// Define the type for the `logo` prop
interface HeaderProps {
  /** A React component that represents the logo. This component is rendered within the header. */
  logo: React.ComponentType;
}

/**
 * The Header component displays a header with a logo and a user icon.
 */
export const Header: React.FC<HeaderProps> = ({ logo: Logo }) => {
  return (
    <header>
      <div className="border border-grey">
        <div className='flex justify-between items-center h-16 p-4 md:px-20'>
          <Logo />
          
          <Icon name={'UserCircleIcon'} width={30} height={30}/>

        </div>
      </div>
    </header>
  );
};
