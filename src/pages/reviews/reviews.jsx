import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsMovie } from 'services/api';
import { ReviewsList, Author, Text } from './reviews.styled';

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
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Author>Author: {author}</Author>
                <Text>{content}</Text>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <Text>We don't have any reviews for this movie</Text>
      )}
    </>
  );
};

export default Reviews;
