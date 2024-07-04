import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ReviewList = ({ reviews }) => {
  return (
    <ListGroup className="mt-4">
      {reviews.map(review => (
        <ListGroup.Item key={review.id}>
          <p>{review.review}</p>
          <p>Rating: {review.rating}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ReviewList;
