const Party = require('../../models/party');

const updatePartyOverallRating = party => new Promise((resolve, reject) => {
  Party.findOneAndUpdate({ partyName: party.partyName }, {
    $set: {
      vibeRating: party.newVibeRating,
      crowdRating: party.newCrowdRating,
      musicRating: party.newMusicRating,
    },
  },
  { new: true },
  (err, partyData) => {
    if (err) {
      reject(err);
    } else {
      resolve({ partyname: partyData.partyName, voterId: party.voterId });
    }
  });
});
module.exports = { updatePartyOverallRating };
