const express = require('express');
const router = express.Router();
const controlleMessages = require('../controllers/messages');
const middlewareMessages = require('../middlewares/messages');
const middlewareToken = require('../middlewares/authToken');
  
router.post(
    '/messages', 
    middlewareToken.authToken, 
    middlewareMessages.validateMessage, 
    controlleMessages.createMessage
);

router.get(
    '/messages/:groupId', 
    middlewareToken.authToken, 
    controlleMessages.getMessages
);

module.exports = router;