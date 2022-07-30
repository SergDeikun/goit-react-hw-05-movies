import { Routes, Route } from 'react-router-dom';

// import Container from '../container/container';
import Navigation from '../navigation/navigation';
import Movies from 'pages/movies';
import MovieDetails from 'pages/movieDetails';

import Home from '../../pages/home';

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
