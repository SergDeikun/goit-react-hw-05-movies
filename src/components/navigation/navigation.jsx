import { Link, Header } from './navigation.styled';

const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};

export default Navigation;
