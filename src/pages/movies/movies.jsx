import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from '../../services/api';

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
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
