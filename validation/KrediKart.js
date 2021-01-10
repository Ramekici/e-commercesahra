const Validator= require('validator');
const isEmpty = require('./is-empty');


module.exports = validateKrediKartInput=(data)=>{
    let errors={};

    data.adSoyad= !isEmpty(data.adSoyad) ? data.adSoyad:'';
    data.kartNumarasi= !isEmpty(data.kartNumarasi) ? data.kartNumarasi:'';
    data.ay= !isEmpty(data.ay) ? data.ay: '';
    data.yil= !isEmpty(data.yil) ? data.yil: '';

    if(Validator.isEmpty(data.adSoyad)){
        errors.adS= 'Ad ve soyad alanı boş bırakılmamalıdır...'
    }
    if(Validator.isEmpty(data.kartNumarasi)){
        errors.kartN= 'Kart numarası alanı boş bırakılmamalıdır...'
    }
    if(Validator.isEmpty(data.ay)){
        errors.ayy= 'ay alanı boş bırakılmamalıdır...'
    }
    if(Validator.isEmpty(data.yil)){
        errors.yl= 'Yıl alanı boş bırakılmamalıdır...'
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
};
