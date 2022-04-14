import React from 'react';
import Header from './header';

const Wrapper = ({ children }) => {
  return (
    <div className='flex flex-col bg-lime-100'>
      <Header />
      <div className='flex-1 h-screen min-h-[calc(100vh-6rem)]'>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;