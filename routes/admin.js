const express = require('express');
const {getAdminController, postAddProductController, postRemoveProductController, postUpdateProductController} = require('../controllers/admin');
const router = express.Router();

router.get('/', getAdminController);
router.post('/add-product', postAddProductController);
router.post('/remove-product', postRemoveProductController);
router.post('/update-product', postUpdateProductController);

module.exports = router;