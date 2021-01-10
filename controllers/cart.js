const Profile = require('../models/Profile');

exports.cartGettor = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
          res.status(200).json({cart:profile.cart})
        })
        .catch(err=> res.status(404).json({
          message: "sepetiniz gönderilemedi"
        }));
}

exports.cartCreator = (req,res, next)=>{
    Profile.findOne({user:req.userData.userId})
      .then(profile => {
          const cartItem = {
            productId:req.body.product._id,
            sektor:req.body.product.sektor,
            isim:req.body.product.isim,
            marka:req.body.product.marka,
            fiyat:req.body.product.fiyat,
            aciklama:req.body.product.aciklama,
            indirim:req.body.product.indirim,
            imagePath1:req.body.product.imagePath1,
            count:req.body.count,
            renk:req.body.renk
          };
          profile.cart.unshift(cartItem);
          profile.save()
            .then(profile => res.status(201).json({cart: profile.cart}))
        })
        .catch(error=>{
          res.status(404).json({ messsage:"urun sepete eklenmedi"})
        });
}

exports.cartDeletorId = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
            const urunSil = profile.cart.findIndex(prod => {
            return prod.productId === req.params.id;
            })
            profile.cart.splice(urunSil, 1);
            profile.save()
            .then(profile => res.status(201).json({
              profile: profile.cart,
              message:"cart deleted"}));
        }
)}

exports.cartUpdator = (req,res, next)=>{
    Profile.findOne({user:req.userData.userId})
      .then(profile => {
        const inde = profile.cart.find(prod => {
          return prod._id.toString() === req.params.id;
        })
        const indeP = profile.cart.findIndex(prod => {
          return prod._id.toString() === req.params.id
        })
        inde.count = req.body.count;
        profile.cart.splice(indeP, 1);
        profile.cart.unshift(inde);
        profile.save().then(profile => res.status(201).json({
        cart: profile.cart,
        message:"cart updated"}));
      })
      .catch(err => {
        res.status(201).json({
          message:"cart not updated"})
      })
    }

exports.cartDeletor = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
          profile.cart.splice(0);
          profile.save()
          .then(profile => res.status(201).json({
            message:"cart deleted"})
          );
        }
)}