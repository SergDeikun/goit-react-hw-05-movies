import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsMovie } from 'services/api';
import ReviewsInfo from 'components/reviewsInfo/reviewsInfo';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsMovie(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ReviewsInfo data={reviews} />
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
