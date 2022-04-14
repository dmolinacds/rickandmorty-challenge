import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex items-center justify-center pt-5 w-full'>
      <Link to='/'>
        <img src='/headerLogo.png' alt='/headerLogo.png' className='h-[130px]'/>
      </Link>
    </header>
  );
};

export default Header;