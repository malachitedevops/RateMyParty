const express = require('express');

const router = express.Router();

const helloWorldController = require('../controllers/hello-world');
const createPartyController = require('../controllers/createParty');

router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/createparty', createPartyController.createPartyController);
// router.get('/party', );
// router.put('/vote', );
// router.delete('/endparty', );
// router.get('/findparty', );

module.exports = router;
