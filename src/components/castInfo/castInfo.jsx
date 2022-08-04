import PropTypes from 'prop-types';
import { CastList, Text } from './castInfo.styled';

const CastInfo = ({ data }) => {
  return (
    <>
      <CastList>
        {data.map(({ id, profile_path, name, character }) => {
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
    </>
  );
};

CastInfo.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CastInfo;
