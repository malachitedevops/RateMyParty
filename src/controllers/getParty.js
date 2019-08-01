const getParty = require('../services/getParty/getParty-service');

const findPartyController = (req, res) => {
  const { partyname } = req.headers;
  getParty.findParty(partyname)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ status: 'error', message: err.message });
    });
};

module.exports = { findPartyController };
