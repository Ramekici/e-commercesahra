const express = require('express');
const router = express.Router();
const Products = require('../../models/Product');
const Profiles = require('../../models/Profile');
const checkAuth = require('../../middleware/check-auth');
const productController = require('../../controllers/products');
//const validateAdresInput = require('../../validation/Adres');
//const validateKrediKartInput = require('../../validation/KrediKart');

// tum ürünleri almak için pagination
router.get('', productController.productGettor);
router.get('/marka', productController.productGettorMarka);
router.get('/:productId',productController.productGettorById);
router.get('/kategoriler/:kategori',productController.productGettorKategori);
router.post("/by/search", productController.listBySearch);
router.post('/like/:urun_id', checkAuth, (req, res, next)=>{
    Profiles.findOne({user:req.user.id})
        .then( profile => {
          Products.findById(req.params.id)
                .then(urun=>{
                    // check for adminnn
                    if(urun.yıldız.filter (yıldız=>yıldız.user.toString()===req.user.id).length>0){
                        return res.status(400).json({yıldızverilmis:"onceden yıldız verilmiş"})
                    }
                    urun.yıldız.unshift({user:req.user.id});
                    urun.save().then(urun=>res.json(urun));
                })
                .catch(err=> res.status(404).json({nourun:"urun bulnamadı"}));
                })

});

router.post('/unlike/:urun_id', checkAuth, (req,res)=>{
    Profiles.findOne({user:req.user.id})
        .then(profile=>{
          Products.findById(req.params.id)
                .then(urun=>{

                    if(urun.yıldız.filter (yıldız=>yıldız.user.toString()===req.user.id).lengt===0){
                        return res.status(400).json({yıldızverilmis:"onceden yıldız verilmiş"})
                    }
                    return res.status(400).json({notliked:"urun heüz beğenilmemiş"})
                })
                const removeIndex = urun.yıldız
                .map(item=>item.user.toString())
                .indexOf(req.user.id);

                urun.yıldız.splice(removeIndex,1);
                urun.save().then(urun=>res.json(urun));

                })
                .catch(err=> res.status(404).json({nourun:"urun bulnamadı"}));

});


router.post('/yorum/:urun_id', checkAuth, productController.productYorumCreator);
router.get('/:gt-:lt-:urun-:marka', productController.productGettorBySearch);


module.exports= router;
