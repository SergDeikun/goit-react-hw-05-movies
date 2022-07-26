import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fechMmovieDetails } from '../services/api';

const MovieDetails = () => {
  const movieId = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);

  useEffect(() => {
    fechMmovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <h1>{movieId}</h1>;
    </>
  );
};

export default MovieDetails;
