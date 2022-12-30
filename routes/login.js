const express = require('express');
const {getLoginController, postLoginController} = require('../controllers/login');
const router = express.Router();

router.get('/', getLoginController);
router.post('/', postLoginController);

module.exports = router;