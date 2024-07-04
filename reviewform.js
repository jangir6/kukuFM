import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ audiobookId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`/api/audiobooks/${audiobookId}/reviews`, { review, rating }); // Adjust the API endpoint as needed
      setReview('');
      setRating(1);
      // Optionally refresh the reviews list
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Submit Review</Button>
    </Form>
  );
};

export default ReviewForm;
