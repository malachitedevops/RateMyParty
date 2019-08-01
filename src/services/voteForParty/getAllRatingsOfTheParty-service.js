const Party = require('../../models/party');

const findParty = party => new Promise((resolve, reject) => {
  const allVotes = [party.voters];
  let allVibeRating = 0;
  let allCrowdRating = 0;
  let allMusicRating = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < allVotes.length; i++) {
    allVibeRating += party.voters[i].vibeRating;
    allCrowdRating += party.voters[i].crowdRating;
    allMusicRating += party.voter[i].musicRating;
  }


  /* Party.findOne({ partyName }, 'voters.$',
    (err, partyData) => {
      if (err) {
        reject(new Error('There is no party under this name.'));
      } else {
        resolve(partyData);
      }
    }); */
});
module.exports = { findParty };
