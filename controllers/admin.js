const Products = require('../models/Product');
const validateUrunlerInput = require('../validation/Urunler');


exports.productCreated = (req, res, next) =>{
  const {errors, isValid} = validateUrunlerInput(req.body);
  if(!isValid){
      return res.status(400).json(errors);
  }
  const url = req.protocol + '://' + req.get("host");
  const newUrunler = new Products({
      sektor:req.body.sektor,
      isim:req.body.isim,
      marka:req.body.marka,
      fiyat: parseInt(req.body.fiyat, 0),
      miktar: parseInt(req.body.miktar, 0),
      aciklama:req.body.aciklama,
      indirim: parseInt(req.body.indirim,0),
      imagePath1: url + '/images/' + req.files[0].filename,
      imagePath2: url + '/images/' + req.files[1].filename,
      imagePath3: url + '/images/' + req.files[2].filename,
      user:req.userData.userId
  });
  const renkler = req.body.renkler.split(',');
  newUrunler.renk.unshift(...renkler);
  
  newUrunler.save().then(urun => res.status(201).json({
    message:"Product added successfully",
    product:{
      ...urun,
      id:urun._id
    }
  }))
  .catch(error => {
    res.status(404).json({
      message: 'Urun kaydetme başarısız'
    })
  })
}

exports.productUpdated = (req, res, next) => {
  console.log(req.body, req.files)
  let imagePath1 = req.body.imagePath1;
  let imagePath2 = req.body.imagePath2;
  let imagePath3 = req.body.imagePath3;
  if(req.files) {
    const url = req.protocol + '://' + req.get("host");
    imagePath1 = url + '/images/' + req.files[0].filename
    imagePath2 = url + '/images/' + req.files[1].filename
    imagePath3 = url + '/images/' + req.files[2].filename
  };

  const newProduct = new Products({
    _id:req.body.id,
    sektor:req.body.sektor,
    isim:req.body.isim,
    marka:req.body.marka,
    fiyat:req.body.fiyat,
    miktar:req.body.miktar,
    aciklama:req.body.aciklama,
    indirim:req.body.indirim,
    user:req.userData.userId,
    imagePath1: imagePath1,
    imagePath2: imagePath2,
    imagePath3: imagePath3,
  });
  const renkler = req.body.seciliRenkler ? req.body.seciliRenkler: req.body.renkler.split(',');
  newProduct.renk.unshift(...renkler);
  Products.updateOne({_id: req.params.id, user: req.userData.userId}, newProduct)
  .then(result => {
    if(result.nModified > 0) {
      res.status(200).json({message: "Updated successful"});
    } else {
      res.status(401).json({message: "Yetkili değilsiniz"})
    }
  })
  .catch(error => {
    res.status(404).json({
      message: 'Urun güncelleme başarısız'
    })
  })
}

exports.productDeleted = (req, res, next) => {
  Products.deleteOne({_id: req.params.id, user:req.userData.userId })
    .then(result => {
      if(result.n > 0) {
        res.status(200).json({ message: "Silme başarılı"})
      } else {
        res.status(401).json({ message:"Yetkisiz kullanıcı"})
      }
    })
    .catch ( error => {
    res.status(500).json({
      message: "Ürünü silme başarısız"
    })
  });
}
