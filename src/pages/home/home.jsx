import { useState, useEffect } from 'react';

import { fetchPopularMovies } from 'services/api';
import MoviesList from 'components/moviesList/moviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchPopularMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return <>{movies && <MoviesList data={movies} />}</>;
};

export default Home;
