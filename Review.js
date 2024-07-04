// models/Review.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  audiobookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Audiobook', required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
