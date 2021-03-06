import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const getAllCharacters = (page) =>
  api.get('character', { params: { page } });

export const getCharacter = (id) =>
  api.get(`character/${id}`);