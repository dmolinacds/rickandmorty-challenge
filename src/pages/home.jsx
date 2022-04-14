import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchCharacters,
  selectCharacters,
  selectCharactersPending,
  selectCharactersError,
  selectCharactersPagination,
} from '../reducers/characters';

import CharacterCard from '../components/characterCard';
import Wrapper from '../components/wrapper';
import Button from "../components/button";

const Home = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectCharactersError);
  const pending = useSelector(selectCharactersPending);
  const pagination = useSelector(selectCharactersPagination);

  useEffect(() => {
    dispatch(fetchCharacters(page));
    setPage(page => page + 1);
  }, [dispatch]);

  const nextPage = async () => {
    dispatch(fetchCharacters(page));
    setPage(page => page + 1);
  };

  return (
    <Wrapper>
      {error && <p className='text-xl font-bold text-center'>{error}</p>}
      {!pending && !error && !characters.length && (
          <p className='text-center font-bold text-xl text-sky-500'>Bad news Morty, I can't find any characters.</p>
      )}
      <div className='grid grid-cols-3 gap-20 p-20'>
        {characters?.map(({ name, image }) => (
          <CharacterCard
            name={name}
            image={image}
          />
        ))}
      </div>
      {pending && <p className='text-xl font-bold text-center text-sky-500'>Loading characters Morty...</p>}
      {pagination?.next && (
        <div className="flex flex-row items-center justify-center px-20 mt-10 mb-20">
          <Button onClick={() => nextPage()}>
            Load more
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

export default Home;