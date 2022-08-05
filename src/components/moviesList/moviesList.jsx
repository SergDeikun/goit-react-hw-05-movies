import { Outlet, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
      <Outlet />
    </ul>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MoviesList;
