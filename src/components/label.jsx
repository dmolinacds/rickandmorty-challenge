import React from 'react';

const Label = ({ children }) => {
    return (
      <div className='font-bold w-[50%]'>
          {children}
      </div>
    );
};

export default Label;