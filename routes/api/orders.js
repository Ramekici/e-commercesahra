const express = require('express');
const router = express.Router();
const checkAuth = require('../../middleware/check-auth');
const orderController = require('../../controllers/order');


//const validateUrunlerInput = require('../../validation/Urunler');
//const validateAdresInput = require('../../validation/Adres');
//const validateKrediKartInput = require('../../validation/KrediKart');

// tum siparişleri almak için
router.get('/', checkAuth, orderController.orderGettor);
router.get('/user', checkAuth, orderController.orderGettorUser);
router.get('/:siparis_id', checkAuth, orderController.orderGettorOrder);
router.post('/', checkAuth, orderController.orderCreator);



module.exports= router;
