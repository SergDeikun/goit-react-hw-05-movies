import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fechPopularMovies } from 'services/api';
// import MoviesList from 'components/moviesItem/moviesItem';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fechPopularMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ original_title, id }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{original_title}</Link>
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
