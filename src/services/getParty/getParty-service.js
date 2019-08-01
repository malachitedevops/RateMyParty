const Party = require('../../models/party');

const findParty = patryName => new Promise((resolve, reject) => {
  Party.findOne({ patryName },
    (err, partyData) => {
      if (err) {
        reject(new Error('There is no party under this name.'));
      } else {
        resolve(partyData);
      }
    });
});
module.exports = { findParty };
