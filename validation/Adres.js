const Validator= require('validator');
const isEmpty = require('./is-empty');


module.exports = validateAdresInput=(data)=>{
    let errors={};

    data.ad= !isEmpty(data.ad)? data.ad:'';
    data.soyad= !isEmpty(data.soyad)? data.soyad:'';
    data.tcNo= !isEmpty(data.tcNo)? data.tcNo:'';
    data.adresTanim= !isEmpty(data.adresTanim)? data.adresTanim:'';
    data.adres= !isEmpty(data.adres)? data.adres:'';
    data.ilce= !isEmpty(data.ilce) ? data.ilce:'';
    data.il= !isEmpty(data.il)? data.il:'';
    data.telefon= !isEmpty(data.telefon) ? data.telefon:'';

    if(Validator.isEmpty(data.ad)){
        errors.ads= 'Ad alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.soyad)){
        errors.syd= 'Soyad alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.tcNo)){
        errors.tcN= 'TC no alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.adresTanim)){
        errors.adrsT= 'Adres Tanım alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.adres)){
        errors.adrs= 'Adres alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.ilce)){
        errors.ilc= 'ilce alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.il)){
        errors.ill= 'il alanı boş bırakılmamalıdır.'
    }
    if(Validator.isEmpty(data.telefon)){
        errors.tlfn= 'Telefon alanı boş bırakılmamalıdır.'
    }
    if(!Validator.isLength(data.tcNo,{min:11, max:11})){
        errors.tcN= 'Geçerli tcn numarası giriniz.'
    }
    if(!Validator.isLength(data.telefon,{min:13, max:13})){
        errors.tlfn= 'Geçerli telefon numarası giriniz.'
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
};
