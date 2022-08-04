import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastMovie } from 'services/api';
import { CastList, Text } from './cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCastMovie(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path &&
                    `https://image.tmdb.org/t/p/w200/${profile_path}`
                  }
                  alt={name}
                />
                <Text>{name}</Text>
                <Text>Character: {character}</Text>
              </li>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
