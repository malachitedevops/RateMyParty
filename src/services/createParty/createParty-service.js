const Party = require('../../models/party');

const createParty = partyName => new Promise((resolve, reject) => {
  if (partyName === undefined) {
    reject(new Error('Party naem is required.'));
  }

  const newParty = new Party({ partyName });
  newParty.save((err, currentParty) => {
    if (err) {
      reject(err);
    } else {
      resolve(currentParty);
    }
  });
});

module.exports = { createParty };
