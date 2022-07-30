import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchPopularMovies } from 'services/api';
// import MoviesList from 'components/moviesItem/moviesItem';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchPopularMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
      {/* {movies && MoviesList} */}
    </>
  );
};

export default Home;
