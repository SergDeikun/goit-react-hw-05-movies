import { Link } from 'react-router-dom';

const MoviesItem = ({ original_title }) => {
  console.log(original_title);
  return (
    <li>
      <Link to="{id}">{original_title}</Link>
    </li>
  );
};

export default MoviesItem;
