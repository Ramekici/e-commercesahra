const Validator= require('validator');
const isEmpty = require('./is-empty');


module.exports = validateOrderInput=(data)=>{
    let errors={};

    data.ad= !isEmpty(data.adresData.ad)? data.adresData.ad:'';
    data.soyad= !isEmpty(data.adresData.soyad)? data.adresData.soyad:'';
    data.tcNo= !isEmpty(data.adresData.tcNo)? data.adresData.tcNo:'';
    data.adresTanim= !isEmpty(data.adresData.adresTanim)? data.adresData.adresTanim:'';
    data.adres= !isEmpty(data.adresData.adres)? data.adresData.adres:'';
    data.ilce= !isEmpty(data.adresData.ilce) ? data.adresData.ilce:'';
    data.il= !isEmpty(data.adresData.il)? data.adresData.il:'';
    data.telefon= !isEmpty(data.adresData.telefon) ? data.adresData.telefon:'';

    data.adSoyad= !isEmpty(data.kartBilgileri.adSoyad) ? data.kartBilgileri.adSoyad:'';
    data.kartNumarasi= !isEmpty(data.kartBilgileri.kartNumarasi) ? data.kartBilgileri.kartNumarasi:'';
    data.ay= !isEmpty(data.kartBilgileri.ay) ? data.kartBilgileri.ay: '';
    data.yil= !isEmpty(data.kartBilgileri.yil) ? data.kartBilgileri.yil: '';
    data.cvc= !isEmpty(data.kartBilgileri.cvc) ? data.kartBilgileri.cvc: '';

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
    if(Validator.isEmpty(data.cvc)){
        errors.cv= 'CVC boş bırakılmamalıdır...'
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
};
