import PropTypes from 'prop-types';

import {
  Wrap,
  MovieInfo,
  Text,
  GenreList,
  GenreItem,
} from './movieCard.styled';

const MovieCard = ({ data }) => {
  const { poster_path, title, vote_average, overview, genres } = data;
  return (
    <>
      <Wrap>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />

        <MovieInfo>
          <h2>{title}</h2>
          <Text>User Score {Math.round(vote_average * 10)}%</Text>
          <h3>Overview</h3>
          <Text>{overview}</Text>
          <h3>Genres</h3>
          <GenreList>
            {genres.map(({ id, name }) => {
              return <GenreItem key={id}>{name}</GenreItem>;
            })}
          </GenreList>
        </MovieInfo>
      </Wrap>
    </>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieCard;
