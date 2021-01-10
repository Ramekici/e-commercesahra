const express = require('express');
const router = express.Router();
const IyzipayController = require('../../controllers/iyzipay');
const checkAuth = require('../../middleware/check-auth');

router.post('/iyzipay', checkAuth, IyzipayController.postChargerIyzipay);

module.exports= router;
