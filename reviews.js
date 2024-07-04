// routes/reviews.js

const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Submit a review
router.post('/', async (req, res) => {
  const review = new Review({
    audiobookId: req.body.audiobookId,
    review: req.body.review,
    rating: req.body.rating,
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
