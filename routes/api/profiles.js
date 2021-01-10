const express = require('express');
const Profile = require('../../models/Profile');
const router = express.Router();
const checkAuth = require('../../middleware/check-auth');
const adresController = require('../../controllers/adres');
const cartController = require('../../controllers/cart');
const krediKartController = require('../../controllers/kredikart');
const favorilerController = require('../../controllers/favoriler');



router.get('/adres', checkAuth, adresController.adresGettor);
router.post('/adres', checkAuth, adresController.adresCreator);
router.delete('/adres/:adr_id', checkAuth, adresController.adresDeletor);
router.put('/adres/:adr_id', checkAuth, adresController.adresUpdator);

router.get('/kredikart', checkAuth, krediKartController.krediKartGettor);
router.post('/kredikart', checkAuth, krediKartController.krediKartCreator);
router.delete('/kredikart/:kart_id', checkAuth, krediKartController.krediKartDeletor);


router.post('/cart', checkAuth, cartController.cartCreator);
router.put('/cart/:id', checkAuth, cartController.cartUpdator);
router.get('/cart', checkAuth, cartController.cartGettor);
router.delete('/cart/:id', checkAuth, cartController.cartDeletorId);
router.delete('/cart', checkAuth, cartController.cartDeletor )


router.post('/favoriler', checkAuth, favorilerController.favoriCreator);
router.delete('/favoriler/:id', checkAuth, favorilerController.favoriDeletorId);
router.get('/favoriler', checkAuth, favorilerController.favoriGettor);

module.exports= router;
