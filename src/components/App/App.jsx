import { Routes, Route } from 'react-router-dom';

import Container from '../container/container';
import Navigation from '../navigation/navigation';
import Movies from 'pages/movies';
import MovieDetails from 'pages/movieDetails';

import Home from '../../pages/home';

export const App = () => {
  return (
    <Container>
      <Navigation />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};
