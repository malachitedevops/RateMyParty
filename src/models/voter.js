const mongoose = require('mongoose');

const Voter = mongoose.Schema({
  vibeRating: {
    type: Number,
    required: true,
  },
  crowdRating: {
    type: Number,
    required: true,
  },
  musicRating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Voter', Voter);
