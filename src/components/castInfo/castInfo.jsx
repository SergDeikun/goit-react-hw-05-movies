import PropTypes from 'prop-types';
import { CastList, Text, Avatar } from './castInfo.styled';
import defaultImg from '../../images/defaultImg.png';

const URL_IMG = 'https://image.tmdb.org/t/p/w200/';

const CastInfo = ({ data }) => {
  return (
    <>
      <CastList>
        {data.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <Avatar
                src={profile_path ? URL_IMG + profile_path : defaultImg}
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
