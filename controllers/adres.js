const Profile = require('../models/Profile');
const validateAdresInput = require('../validation/Adres');


exports.adresGettor = (req, res, next)=>{
    const errors={};
    Profile.findOne({user:req.userData.userId})
        .then(profile=>{
            if(!profile){
                errors.noprofile ="Bu sitede bu isimle herhangi bir kullanıcı bulunamadı";
                return res.status(404).json(errors)
            }
            res.status(201).json({
              profile: profile.adres,
              message:"adres gönderildi"})
        })
        .catch(err=>res.status(404).json(err));
}


exports.adresCreator = (req,res, next)=> {
    const {errors, isValid} = validateAdresInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    console.log(req.body);
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
            const newAdres = {
                ad:req.body.ad,
                soyad:req.body.soyad,
                tcNo:req.body.tcNo,
                adresTanim: req.body.adresTanim,
                adres:req.body.adres,
                ilce:req.body.ilce,
                il:req.body.il,
                telefon:req.body.telefon,
                postaKodu:req.body.postaKodu
            }
            profile.adres.unshift(newAdres);
            profile.save().then(profile => res.status(201).json({
              profile: profile.adres,
              message:"adres Created"})
        )})
        .catch (err => {
        res.status(400).json(err);}
)}

exports.adresDeletor = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile=>{
            const removeIndex = profile.adres
            .map(item => item.id)
            .indexOf(req.params.adr_id);
            profile.adres.splice(removeIndex, 1);
            profile.save().then(profile=> res.json(profile));
        })
}

exports.adresUpdator = (req, res, next)=>{
    const {errors, isValid} = validateAdresInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const newAdres = {
      _id:req.params.adr_id,
      ad:req.body.ad,
      soyad:req.body.soyad,
      tcNo:req.body.tcNo,
      adresTanim:req.body.adresTanim,
      adres:req.body.adres,
      ilce:req.body.ilce,
      il:req.body.il,
      telefon:req.body.telefon,
      postaKodu:req.body.postaKodu
    };
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
            const updateIndex = profile.adres
            .map(item => item.id)
            .indexOf(req.params.adr_id);
            profile.adres.splice(updateIndex,1);
            profile.adres.unshift(newAdres);
            profile.save().then(profile=> res.status(201).json({
              profile: profile.adres,
              message: 'Updated Adres'}));
            })
        .catch (err => {
        res.status(400).json(err);
})}

