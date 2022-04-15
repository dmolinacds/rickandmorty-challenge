import React from 'react';

const CharacterCard = ({ name, image }) => {
  return (
    <div
      className='bg-lime-200 rounded-sm flex flex-col p-5 hover:cursor-pointer items-center justify-center'
    >
      <img alt={name} src={image} className='rounded-sm flex' />
      <p className='font-mono font-bold text-l text-center mt-5 text-sky-500'>{name}</p>
    </div>
  );
};

export default CharacterCard;