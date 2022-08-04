import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import MovieCard from 'components/movieCard/movieCard';
import AdditionalInfo from 'components/additionalInfo/additionalinfo';

import { fetchMmovieDetails } from '../../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

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
          <button type="button" onClick={handleGoBack}>
            Go back
          </button>
          <MovieCard data={movie} onClick={handleGoBack} />
          <AdditionalInfo movieId={movieId} />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
