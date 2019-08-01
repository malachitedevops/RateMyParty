const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Voter = require('./voter').schema;

mongoose.set('useFindAndModify', false);


function getMockId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Party = mongoose.Schema({
  partyName: {
    type: String,
    unique: true,
    required: true,
  },
  vibeRating: {
    type: Number,
    default: 0,
    required: false,
  },
  crowdRating: {
    type: Number,
    default: 0,
    required: false,
  },
  musicRating: {
    type: Number,
    default: 0,
    required: false,
  },
  voters: {
    type: [Voter],
    required: false,
  },
  mockId: {
    type: Number,
    default: getMockId(1000, 9999),
    required: false,
  },
});

Party.plugin(uniqueValidator, { message: 'A party is already running under this name.' });

module.exports = mongoose.model('Party', Party);
