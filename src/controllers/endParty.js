const endParty = require('../services/deletParty/deleteParty-service');

const endPartyController = (req, res) => {
  const { partyName, mockId } = req.body;
  endParty.endParty(partyName, mockId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(409).json(err);
    });
};

module.exports = { endPartyController };
