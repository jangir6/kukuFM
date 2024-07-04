
const express = require('express');
const router = express.Router();
const Audiobook = require('../models/Audiobook');

// Get all audiobooks
router.get('/', async (req, res) => {
  try {
    const audiobooks = await Audiobook.find();
    res.json(audiobooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single audiobook
router.get('/:id', getAudiobook, (req, res) => {
  res.json(res.audiobook);
});

async function getAudiobook(req, res, next) {
  let audiobook;
  try {
    audiobook = await Audiobook.findById(req.params.id);
    if (audiobook == null) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.audiobook = audiobook;
  next();
}

module.exports = router;
