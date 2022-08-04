import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navigation from '../navigation/navigation';
import NotFound from 'pages/notFound/notFound';

const Home = lazy(() =>
  import('pages/home/home' /* webpackChunkName: 'home'*/)
);
const Movies = lazy(() =>
  import('pages/movies/movies' /* webpackChunkName: 'movies'*/)
);
const MovieDetails = lazy(() =>
  import(
    'pages/movieDetails/movieDetails' /* webpackChunkName: 'movieDetails'*/
  )
);
const Cast = lazy(() =>
  import('pages/cast/cast' /* webpackChunkName: 'cast'*/)
);
const Reviews = lazy(() =>
  import('pages/reviews/reviews' /* webpackChunkName: 'reviews'*/)
);

export const App = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
