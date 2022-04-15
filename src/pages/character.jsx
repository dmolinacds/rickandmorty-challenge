import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import {
  fetchCharacter,
  selectCharacterError,
  selectCharacterPending,
  selectCharacter,
} from '../reducers/character';

import Wrapper from '../components/wrapper';
import Label from '../components/label';

const Character = () => {
    const routerLocation = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routerLocation]);

  const { id } = useParams();
  const dispatch = useDispatch();

  const character = useSelector(selectCharacter);
  const error = useSelector(selectCharacterError);
  const pending = useSelector(selectCharacterPending);

  const { name, status, species, type, gender, origin, location, image, episode } =
    character || {};

    console.log(character)

  useEffect(() => {
    if (id) dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <div className='flex flex-col items-center mt-5 font-mono text-sky-600'>
        {pending && (
          <p className='text-xl font-bold text-center text-sky-500'>Loading characters Morty...</p>
        )}
        {error && <p className='text-xl font-bold text-center text-sky-500'>{error}</p>}
        {!pending && !error && !character && (
          <p className='text-center font-bold text-xl text-sky-500'>
            Bad news Morty, I can't find the character's details.
          </p>
        )}
        <img
            alt={image}
            src={image}
            className='rounded-sm'
        />
        <div className='mt-5 text-3xl font-bold text-center'>{name}</div>
        <div className='flex flex-wrap align-center justify-between w-[550px]'>
            {status && <Label>Status</Label>}
            {status}
            {species && <Label>Species</Label>}
            {species}
            {type && <Label>Type</Label>}
            {type}
            {gender && <Label>Gender</Label>}
            {gender}
            {origin?.name && <Label>Origin</Label>}
            {origin?.name}
            {location?.name && <Label>Location</Label>}
            {location?.name}
            {episode?.length && <Label>Appearances</Label>}
            {episode?.length}
        </div>
      </div>
    </Wrapper>
  );
};

export default Character;