const Party = require('../../models/party');
const Voter = require('../../models/voter');

const setRatings = (partyName, vibeRating, crowdRating, musicRating) => new Promise((resolve, reject) => {
  const newVotes = new Voter({ vibeRating, crowdRating, musicRating });
  Party.findOneAndUpdate({ partyName }, {
    $push: {
      voters: newVotes,
    },
  },
  { new: true },
  (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});
module.exports = { setRatings };
