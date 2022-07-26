// import { Link } from 'react-router-dom';
import { Link } from './navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};

export default Navigation;
