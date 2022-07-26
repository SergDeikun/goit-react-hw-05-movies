import MoviesItem from 'components/moviesItem/moviesItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ original_title, id }) => {
        return <MoviesItem key={id} title={original_title} />;
      })}
    </ul>
  );
};

export default MoviesList;
