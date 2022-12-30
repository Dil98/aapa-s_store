const express = require('express');
const {getLogoutController} = require('../controllers/logout');
const router = express.Router();

router.get('/', getLogoutController);

module.exports = router;