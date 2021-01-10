const Order = require('../models/Order');

exports.orderGettor = (req, res, next) => {
    Order.find()
    .sort({date:-1})
    .then(siparis => res.status(201).json(siparis))
    .catch(err=> res.status(404).json(err));
}

exports.orderGettorUser = (req, res, next) => {
    Order.find({user:req.userData.userId})
    .sort({date:-1})
    .then(siparis=> res.status(201).json(siparis))
    .catch(err=> res.status(404).json(err));
}

exports.orderGettorOrder = (req, res, next)=>{
    Order.findById(req.params.siparis_id)
    .then(siparis => res.json(siparis))
    .catch(err=> res.status(404).json({msg:"Siparis bulunamadı"}));
}

exports.orderCreator = (req, res, next)=>{
    //const {errors, isValid} = validateUrunlerInput(req.body);
    //if(!isValid){
    //    return res.status(400).json(errors);
    //}
    const newOrder = new Order({
        user:req.userData.userId,
        adres: {
          adresTanim:req.body.adres.adresTanim,
          adres:req.body.adres.adres,
          ilce:req.body.adres.ilce,
          il:req.body.adres.il,
          telefon:req.body.adres.telefon
        },
        krediKart: {
          adSoyad:req.body.krediKart.adSoyad,
          kartNumarasi:req.body.krediKart.kartNumarasi,
        },
        kargo: {
          firma: req.body.kargo.firma,
          ucret: req.body.kargo.ucret
        }
    });
    req.body.urunlerim.map(urun => {
        return newOrder.urunler.unshift({
            urunId: urun.productId,
            imagePath: urun.imagePath1,
            marka: urun.marka,
            miktar: urun.count,
            renk: urun.renk,
            fiyat: urun.fiyat,
            toplam: urun.fiyat * urun.count
        })
    });
    newOrder.save()
    .then(order => res.status(201).json({id: order._id, message: "başarılı"}))
    .catch(err => res.status(401).json({message: "sipariş hatalı"})
    );
}