const findMyParty = require('../services/myFindParty/findMyparty-service');

const findMyPartyController = (req, res) => {
  const { partyName, mockId } = req.body;
  findMyParty.searchForMyParty(partyName, mockId)
    .then((data) => {
      res.status(200).json(data.partyName);
    })
    .catch((err) => {
      res.status(409).json(err);
    });
};

module.exports = { findMyPartyController };
