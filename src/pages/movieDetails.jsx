import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchMmovieDetails } from '../services/api';
// import { qwerty } from './movieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMmovieDetails(movieId).then(data => {
      setMovie(data);
      console.log(data);
      const poster = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      console.log(poster);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <button type="button" to={`/`}>
            Go back
          </button>
          {/* <qwerty>img</qwerty> */}
          {/* <img src={movie.poster_path} alt={movie.title} width={300} /> */}
          <div>
            <h2>{movie.title}</h2>
            <p>User Score{Math.round(movie.vote_average * 10)}%</p>
            <p>
              <span> Overview</span> {movie.overview}
            </p>
            <p>
              <span>Genres</span>
              {movie.genres.map(genre => {
                return genre.name;
              })}
            </p>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
