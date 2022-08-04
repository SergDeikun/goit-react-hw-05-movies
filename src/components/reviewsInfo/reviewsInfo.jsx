import PropTypes from 'prop-types';

import { ReviewsList, Author, Text } from '../../pages/reviews/reviews.styled';

const ReviewsInfo = ({ data }) => {
  return (
    <>
      <ReviewsList>
        {data.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <Author>Author: {author}</Author>
              <Text>{content}</Text>
            </li>
          );
        })}
      </ReviewsList>
    </>
  );
};

ReviewsInfo.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ReviewsInfo;
