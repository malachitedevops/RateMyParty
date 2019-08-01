const Party = require('../../models/party');

const findParty = partyName => new Promise((resolve, reject) => {
  Party.findOne({ partyName },
    (err, partyData) => {
      if (err) {
        reject(new Error('Username or password is incorrect.'));
      } else {
        resolve(partyData);
      }
    });
});
module.exports = { findParty };
