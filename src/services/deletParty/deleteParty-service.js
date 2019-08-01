const Party = require('../../models/party');

const endParty = (partyName, mockId) => new Promise((resolve, reject) => {

  Party.deleteOne({ partyName, mockId },
    (err, partyData) => {
      if (err) {
        reject(new Error('Partyname or Identifer number is wrong'));
      } else {
        resolve(partyData);
      }
    });
});
module.exports = { endParty };
