const voteForParty = require('../services/voteForParty/voteForParty-service');
const updatePartyRating = require('../services/voteForParty/updateOverallRatingForParty-service');

const voteForPartyController = (req, res) => {
  const { partyname } = req.headers;
  const { vibeRating, crowdRating, musicRating } = req.body;

  voteForParty.setRatings(partyname, vibeRating, crowdRating, musicRating)
    .then(partyInfo => updatePartyRating.updatePartyOverallRating(partyInfo))
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ status: 'error', message: err.message });
    });
};

module.exports = { voteForPartyController };
