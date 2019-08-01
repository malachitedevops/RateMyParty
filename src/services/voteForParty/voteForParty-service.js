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
  (err, partyData) => {
    if (err) {
      reject(err);
    } else {
      const allVotes = partyData.voters;
      let allVibeRating = 0;
      let allCrowdRating = 0;
      let allMusicRating = 0;

      for (let i = 0; i < allVotes.length; i += 1) {
        allVibeRating += allVotes[i].vibeRating;
        allCrowdRating += allVotes[i].crowdRating;
        allMusicRating += allVotes[i].musicRating;
      }
      const newVibeRating = Math.round(allVibeRating / allVotes.length);
      const newCrowdRating = Math.round(allCrowdRating / allVotes.length);
      const newMusicRating = Math.round(allMusicRating / allVotes.length);

      resolve({
        partyName: partyData.partyName, newVibeRating, newCrowdRating, newMusicRating, voterId: newVotes._id,
      });
    }
  });
});
module.exports = { setRatings };
