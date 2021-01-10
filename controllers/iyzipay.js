const Iyzipay = require('iyzipay');
const Order = require('../models/Order');
const validateOrderInput = require('../validation/Order');


exports.postChargerIyzipay = (req, res, next) => {
    const {errors, isValid} = validateOrderInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const iyzipay = new Iyzipay({
        apiKey: 'sandbox-6ATm0qY1WlLuqYPqSF7phrGLifPiznXQ',
        secretKey: 'sandbox-JaRzfoUHOWIC7iHdfdASikUY1R7mRiwT',
        uri: 'https://sandbox-api.iyzipay.com'
    });
    
    let toplam = 0;
    const urunler = req.body.cart.map(item => {
        toplam= toplam + item.indirim;
        return {
            id: item.productId,
            name: item.marka,
            category1: item.sektor,
            itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
            price: item.indirim ? item.indirim: item.fiyat
        }
    })

    var request = {
        conversationId:'122254554554',
        price:toplam,
        paidPrice: toplam,
        currency: Iyzipay.CURRENCY.TRY,
        installment: '1',
        paymentCard: {
            cardHolderName: req.body.kartBilgileri.adSoyad,
            cardNumber: req.body.kartBilgileri.kartNumarasi,
            expireMonth: req.body.kartBilgileri.ay,
            expireYear: req.body.kartBilgileri.yil,
            cvc: req.body.kartBilgileri.cvc,
            registerCard: '0'
        },
        buyer: {
            id: req.userData.userId,
            name: req.body.adresData.ad,
            surname: req.body.adresData.soyad,
            gsmNumber: req.body.adresData.telefon,
            email: req.userData.email,
            identityNumber: req.body.adresData.tcNo,
            registrationAddress: req.body.adresData.adres,
            ip: '85.34.78.112',
            city: req.body.adresData.il,
            country: 'Turkiye',
        },
        shippingAddress: {
            contactName: req.body.adresData.ad + ' ' + req.body.adresData.soyad,
            city: req.body.adresData.il,
            country: 'Turkiye',
            address: req.body.adresData.adres,
            zipCode: req.body.adresData.postaKodu
        },
        billingAddress: {
            contactName: req.body.adresData.ad + ' ' + req.body.adresData.soyad,
            city: req.body.adresData.il,
            country: 'Turkiye',
            address: req.body.adresData.adres,
            zipCode: req.body.adresData.postaKodu
        },
        basketItems: [
            ...urunler
        ]
    };
    iyzipay.payment.create(request, function (err, result) {
        if(!err && !(result.status === 'failure')){
            res.status(201).json(result);
            const newOrder = new Order({
                user:req.userData.userId,
                adres: {
                  adresTanim:req.body.adresData.adresTanim,
                  adres:req.body.adresData.adres,
                  ilce:req.body.adresData.ilce,
                  il:req.body.adresData.il,
                  telefon:req.body.adresData.telefon
                },
                krediKart: {
                  adSoyad:req.body.kartBilgileri.adSoyad,
                  kartNumarasi:req.body.kartBilgileri.kartNumarasi,
                },
                kargo: {
                  firma: req.body.kargo.firma,
                  ucret: req.body.kargo.ucret
                }
            });
            req.body.cart.map(urun => {
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
        } else {
            res.status(400).json(result);
        }
    });
};
