const Party = require('../../models/party');

const searchForMyParty = (partyName, mockId) => new Promise((resolve, reject) => {
  Party.findOne({
    partyName,
    mockId,
  },
  (err, partyFound) => {
    if (partyFound <= 0 || err) {
      reject(new Error('Party name or identifer number is very very bad.'));
    } else {
      resolve(partyFound);
    }
  });
});

module.exports = { searchForMyParty };
