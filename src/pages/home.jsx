import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchCharacters,
    selectCharacters,
    selectCharactersPending,
    selectCharactersError,
  } from '../reducers/characters';

import CharacterCard from '../components/characterCard';
import Wrapper from '../components/wrapper';

const Home = () => {
    const dispatch = useDispatch();
    const characters = useSelector(selectCharacters);
    const error = useSelector(selectCharactersError);
    const pending = useSelector(selectCharactersPending);

    useEffect(() => dispatch(fetchCharacters()), [dispatch]);

  return (
    <Wrapper>
      <div className='grid grid-cols-3 gap-20 p-20'>
        {pending && <p className='text-xl font-bold text-center text-sky-500'>Loading characters Morty...</p>}
        {error && <p className='text-xl font-bold text-center'>{error}</p>}
        {!pending && !error && !characters.length && (
            <p className='text-center font-bold text-xl text-sky-500'>Bad news Morty, I can't find any characters.</p>
        )}
        {characters?.map(({ name, image }) => (
          <CharacterCard
            name={name}
            image={image}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Home;