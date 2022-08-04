import { Outlet } from 'react-router-dom';

import MoviesItem from 'components/moviesItem/moviesItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ original_title, id }) => {
        return <MoviesItem key={id} title={original_title} />;
      })}
      <Outlet />
    </ul>
  );
};

export default MoviesList;
