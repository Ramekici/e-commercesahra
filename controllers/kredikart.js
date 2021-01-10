const Profile = require('../models/Profile');
//const validateKrediKartInput = require('../validation/KrediKart');

exports.krediKartGettor = (req, res, next)=>{
    const errors={};
    Profile.findOne({user:req.userData.userId})
        .then(profile => {
            if(!profile){
                errors.noprofile ="Bu sitede bu isimle herhangi bir kullanıcı bulunamadı";
                return res.status(404).json(errors)
            }
            res.status(201).json({kart:profile.krediKart})
        })
        .catch(err => res.status(404).json(err));
}

exports.krediKartCreator = (req, res, next)=>{
    //const {errors, isValid} = validateKrediKartInput(req.body);
    //if(!isValid){
    //    return res.status(400).json(errors);
    //}
    Profile.findOne({user:req.userData.userId})
        .then(profile=>{
            const newKrediKart = {
                adSoyad:req.body.kartIsim,
                kartNumarasi:req.body.kartNumarasi,
                month:req.body.month,
                year: req.body.year
            }
            profile.krediKart.unshift(newKrediKart);
            profile.save().then(profile=> res.status(201).json({kart:profile.krediKart}));
        }
)}

exports.krediKartDeletor = (req, res, next)=>{
    Profile.findOne({user:req.userData.userId})
        .then(profile=>{
            const removeIndex = profile.krediKart
                .map(item => item.id)
                .indexOf(req.params.kart_id);
            profile.krediKart.splice(removeIndex, 1);
            profile.save().then(profile=> res.json());
        }
)}