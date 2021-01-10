const Products = require('../models/Product');

exports.productGettor = (req, res, next)=>{
    const pageSize= +req.query.ps;
    const currentPage= +req.query.pg;
    const sorting = req.query.sort;
    var urunlerim = Products.find();
    let fetchProducts;
    if(pageSize && currentPage){
      if (sorting === "artan") {
        urunlerim
        .sort({indirim:1})
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
      } else if(sorting === "azalan"){
        urunlerim
        .sort({indirim:-1})
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
      }
    }
    urunlerim
      .then(urun => { fetchProducts = urun; return Products.countDocuments()})
      .then(count => res.json({products: fetchProducts, 
        message:"urunler gönderildi", maxProducts: count}))
      .catch(err => res.status(404).json({
        message: "urunleri getirme başarısız"
      }));
}

exports.productGettorMarka = (req, res, next) => {
  Products.find()
    .then(urun => {
      res.status(201).json(urun)
    })
    .catch(err => res.status(404).json({
      message: "urunleri getirme başarısız"
    }));
}

exports.productGettorById = (req, res, next) => {
    Products.findById(req.params.productId)
      .then(urun =>  {
        res.status(201).json(urun);
      })
      .catch(err=> res.status(404).json({message :"Urun bulunamadı"}));
}

exports.productGettorBySearch = (req, res, next)=>{
    Products.find({fiyat: { $gt:req.params.gt, $lt: req.params.lt}, sektor:req.params.urun.toLowerCase(), marka:req.params.marka.toLowerCase()})
      .sort({date:-1})
      .then(urunler => res.json(urunler))
      .catch(err => res.status(404));
}

exports.productGettorKategori = (req, res, next)=>{
    const pageSize= +req.query.ps;
    const currentPage= +req.query.pg;
    const sorting = req.query.sort;
    const markam = req.query.marka ? req.query.marka.split(',')[0]: null;
    const markam1 = req.query.marka ? req.query.marka.split(',')[1]: null;
    const markam2 = req.query.marka ? req.query.marka.split(',')[2]: null;
    const markam3 = req.query.marka ? req.query.marka.split(',')[3]: null;
    const renk = req.query.renk ? req.query.renk.split(',')[0]: null;
    const renk1 = req.query.renk ? req.query.renk.split(',')[1]: null;
    const fiyatLow = req.query.fiyat ? req.query.fiyat.split('-')[0]: null;
    const fiyatHigh = req.query.fiyat ? req.query.fiyat.split('-')[1]: null;
    console.log(fiyatLow, markam);
    var urunlerim = Products.find({sektor:req.params.kategori.toLowerCase()});
    if (markam && fiyatHigh && fiyatLow && renk) {
      console.log("222", renk)
      urunlerim = Products.find({$and:[{sektor:req.params.kategori.toLowerCase()}, 
      {marka:{$in:[markam, markam1, markam2, markam3]}}, 
      {indirim: { $lt: fiyatHigh, $gt:fiyatLow}},
      {renk:{$in:[renk, renk1]}}]});
    } else if(markam) {
      console.log("000")
      console.log(markam, markam1);
        urunlerim = Products.find({ $and:[{sektor:req.params.kategori.toLowerCase()}, {marka:{$in:[markam, markam1, markam2, markam3]}}]});
    } else if (fiyatHigh && fiyatLow){
      console.log("111")
      urunlerim = Products.find({sektor:req.params.kategori.toLowerCase(), indirim: { $lt: fiyatHigh, $gt:fiyatLow}});
    }
    
    let fetchProducts;
    if(pageSize && currentPage){
      if (sorting === "artan") {
        urunlerim
        .sort({indirim:1})
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
      } else if(sorting === "azalan"){
        urunlerim
        .sort({indirim:-1})
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
      }
    }
    urunlerim
      .then(urun => { fetchProducts = urun; return Products.estimatedDocumentCount()})
      .then(count => res.json({products: fetchProducts, 
      message:"urunler gönderildi", maxProducts: count}))
      .catch(err => res.status(404).json({
      message: "urunleri getirme başarısız"
    }));
}

exports.productYorumCreator = (req, res, next)=>{
    Products.findById(req.params.urun_id)
      .then(urun => {
        let yorumVar = false;
        urun.yorumlar.map(yorum => {
          if(yorum.kullanıcı.toString()===req.userData.userId){
            return (yorumVar = true);
          }
          return yorumVar;
        })
        if(!yorumVar) {
          const newComment = {
            kullanıcı:req.userData.userId,
            name:req.userData.name,
            email:req.userData.email,
            yorumBaslik:req.body.yorumBaslik,
            yorumMetni:req.body.yorumMetni,
            puan:req.body.puan,
          }
          urun.yorumlar.unshift(newComment);
          urun.save().then(urun=>res.status(201).json({message:"yorum kayd"}));
        }
      })
      .catch(err=> res.status(404).json({message:"yorumunuz var"}));
  }


 
exports.listBySearch = (req, res, next) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};
 
    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);
 
    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
 
    Products.find(findArgs)
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};