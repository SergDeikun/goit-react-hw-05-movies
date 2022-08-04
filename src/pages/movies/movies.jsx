import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchMovies from 'components/searchMovies/searchMovies';
import { fetchSearchMovies } from '../../services/api';
import MoviesList from 'components/moviesList/moviesList';

const Movies = () => {
  const [searchParams, seatSerchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') || '';

  const handleSubmit = e => {
    e.preventDefault();

    const queryString = e.target.elements.query.value;

    if (queryString.trim() === '') {
      return;
    }

    seatSerchParams({ query: queryString });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchMovies(query).then(({ results }) => setMovies(results));
  }, [query]);

  return (
    <div>
      <SearchMovies onSubmit={handleSubmit} />

      <MoviesList data={movies} />
    </div>
  );
};

export default Movies;
