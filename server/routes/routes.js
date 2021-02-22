const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/lists/add', controllers.addMemberToList);

module.exports = router;