const Party = require('../../models/party');

const findParty = partyName => new Promise((resolve, reject) => {
  Party.findOne({ partyName },
    (err, partyData) => {
      if (err) {
        reject(new Error('There is no party under this name.'));
      } else {
        resolve(partyData);
      }
    });
});
module.exports = { findParty };
