const express = require('express');

const router = express.Router();

const helloWorldController = require('../controllers/hello-world');
const createPartyController = require('../controllers/createParty');
const getPartyController = require('../controllers/getParty');
const voteForPartyController = require('../controllers/voteForparty');
const updateVoteController = require('../controllers/updateCurrentVote');

router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/createparty', createPartyController.createPartyController);
router.get('/party', getPartyController.findPartyController);
router.post('/vote', voteForPartyController.voteForPartyController);
router.put('/update', updateVoteController.updateVoteController);
// router.delete('/endparty', );

module.exports = router;
