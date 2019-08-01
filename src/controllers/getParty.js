const getParty = require('../services/getParty/getParty-service');

const findPartyController = (req, res) => {
  const { partyName } = req.headers;
  getParty.findPartyParty(partyName)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ status: 'error', message: err.message });
    });
};

module.exports = { findPartyController };
