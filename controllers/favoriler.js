const Profile = require('../models/Profile');

exports.favoriGettor = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
          res.status(200).json({favoriler:profile.favoriler})
        })
        .catch(err=> res.status(404).json({
          message: "Favori ürünleriniz gönderilemedi..."
        }));
}

exports.favoriCreator = (req,res, next)=>{
    Profile.findOne({user:req.userData.userId})
      .then(profile => {
          if (profile.favoriler.find(item => item.productId === req.body._id)) {
            return null;
          }
          const favoriItem = {
            productId:req.body._id,
            sektor:req.body.sektor,
            isim:req.body.isim,
            marka:req.body.marka,
            fiyat:req.body.fiyat,
            indirim:req.body.indirim,
            imagePath1:req.body.imagePath1,
          };
          profile.favoriler.unshift(favoriItem);
          profile.save()
            .then(profile => res.status(201).json({favoriler:profile.favoriler}))
        })
        .catch(error=>{
          res.status(404).json({ message: "Favori ürünleriniz kaydedilemedi..."})
        });
}

exports.favoriDeletorId = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
            const urunInd = profile.favoriler.findIndex(prod => {
            return prod._id === req.params.id;
            })
            profile.favoriler.splice(urunInd, 1);
            profile.save()
            .then(profile => res.status(201).json({
              favoriler: profile.favoriler,
              message:"Favori ürün silindi "}));
        }
)}



