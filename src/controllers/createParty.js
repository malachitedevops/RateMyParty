const createParty = require('../services/createParty/createParty-service');

const createPartyController = (req, res) => {
  const { partyName } = req.body;
  createParty.createParty(partyName)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      if (err.errors) {
        res.status(409).json({ status: 'error', message: err.errors.partyName.message });
      } else {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { createPartyController };
