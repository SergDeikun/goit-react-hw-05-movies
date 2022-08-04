import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'ad1bc7edbb361d4c2586895572eb3a0c';

export const fetchPopularMovies = async () => {
  const response = await axios(
    `/trending/movie/day?api_key=${KEY}&language=en-US&page=1`
  );

  return response.data;
};

export const fetchSearchMovies = async searchQuery => {
  const response = await axios(
    `search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );

  return response.data;
};

export const fetchMmovieDetails = async id => {
  const response = await axios(`/movie/${id}?api_key=${KEY}&language=en-US`);

  return response.data;
};

export const fetchCastMovie = async id => {
  const response = await axios(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchReviewsMovie = async id => {
  const response = await axios(
    `/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
};
