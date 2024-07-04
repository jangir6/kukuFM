
const mongoose = require('mongoose');
const reviewSchema = new Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true }
});
const audiobookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  Discription: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: [reviewSchema]
  
});

const Audiobook = mongoose.model('Audiobook', audiobookSchema);

module.exports = Audiobook;
