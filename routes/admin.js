const express = require('express');
const {getAdminController, postAddProductController, postRemoveProductController} = require('../controllers/admin');
const router = express.Router();

router.get('/', getAdminController);
router.post('/add-product', postAddProductController);
router.post('/remove-product', postRemoveProductController);

module.exports = router;