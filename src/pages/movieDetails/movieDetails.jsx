import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { fetchMmovieDetails } from '../../services/api';
import {
  Wrap,
  GoBackBtn,
  MovieInfo,
  Text,
  GenreList,
  GenreItem,
  WrapLink,
} from './movieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchMmovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {movie && (
        <div>
          <GoBackBtn type="button" onClick={handleGoBack}>
            Go back
          </GoBackBtn>

          <Wrap>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />

            <MovieInfo>
              <h2>{movie.title}</h2>
              <Text>User Score {Math.round(movie.vote_average * 10)}%</Text>
              <h3>Overview</h3>
              <Text>{movie.overview}</Text>
              <h3>Genres</h3>
              <GenreList>
                {movie.genres.map(({ id, name }) => {
                  return <GenreItem key={id}>{name}</GenreItem>;
                })}
              </GenreList>
            </MovieInfo>
          </Wrap>

          <WrapLink>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </WrapLink>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
