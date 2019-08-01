const voteUpdate = require('../services/updateVote/updateVote-service');
const updatePartyRating = require('../services/voteForParty/updateOverallRatingForParty-service');

const updateVoteController = (req, res) => {
  const { partyname } = req.headers;
  const {
    voterId, vibeRating, crowdRating, musicRating,
  } = req.body;

  voteUpdate.updateRatings(partyname, voterId, vibeRating, crowdRating, musicRating)
    .then(partyInfo => updatePartyRating.updatePartyOverallRating(partyInfo))
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ status: 'error', message: err.message });
    });
};

module.exports = { updateVoteController };
