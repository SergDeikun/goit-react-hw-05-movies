// https://api.themoviedb.org/3/movie/popular?api_key=ad1bc7edbb361d4c2586895572eb3a0c&language=en-US&page=1

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fechPopularMovies = async () => {
  const response = await axios(
    `/movie/popular?api_key=ad1bc7edbb361d4c2586895572eb3a0c&language=en-US&page=1`
  );

  return response.data;
};

export const fechMmovieDetails = async ({ id }) => {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ad1bc7edbb361d4c2586895572eb3a0c&language=en-US`
  );

  return response.data;
};
