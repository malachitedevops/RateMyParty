const express = require('express');

const router = express.Router();

const helloWorldController = require('../controllers/hello-world');
const createPartyController = require('../controllers/createParty');
const getPartyController = require('../controllers/getParty');

router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/createparty', createPartyController.createPartyController);
router.get('/party', getPartyController.findPartyController);
// router.put('/vote', );
// router.delete('/endparty', );

module.exports = router;
