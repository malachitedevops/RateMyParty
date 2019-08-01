const Party = require('../../models/party');

const findParty = patryName => new Promise((resolve, reject) => {
  Party.findOne({ patryName },
    (err, partyData) => {
      if (err) {
        reject(new Error('Username or password is incorrect.'));
      } else {
        resolve(partyData);
      }
    });
});
module.exports = { findParty };
