const express = require('express');
const {errorController} = require('../controllers/error');
const router = express.Router();

router.get('/', errorController);

module.exports = router;