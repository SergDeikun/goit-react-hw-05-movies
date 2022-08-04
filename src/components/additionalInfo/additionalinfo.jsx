import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WrapLink } from './additionalInfo.styled';

const AdditionalInfo = ({ movieId }) => {
  return (
    <>
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
    </>
  );
};

AdditionalInfo.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default AdditionalInfo;
