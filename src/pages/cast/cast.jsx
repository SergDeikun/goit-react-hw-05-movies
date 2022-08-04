import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastMovie } from 'services/api';
import CastInfo from 'components/castInfo/castInfo';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCastMovie(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return <>{cast && <CastInfo data={cast} />}</>;
};

export default Cast;
