import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import MovieCard from 'components/movieCard/movieCard';
import AdditionalInfo from 'components/additionalInfo/additionalinfo';
import GoBack from 'components/goBack/goBack';

import { fetchMmovieDetails } from '../../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchMmovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      {movie && (
        <div>
          <GoBack goBack={handleGoBack} />
          <MovieCard data={movie} />

          <AdditionalInfo movieId={movieId} />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
