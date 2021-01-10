const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'users'
    },
    adres:[{
        ad:{type: String, required:true},
        soyad:{type:String, required:true},
        adresTanim:{type:String, required:true},
        tcNo:{type:String, required:true},
        adres:{type:String, required:true},
        ilce:{type:String, required:true},
        il:{type:String,required:true},
        telefon:{type:String,required:true},
        postaKodu:{type:String}
    }],
    cart:[{
        productId:{ type:String, required:true},
        sektor:{ type:String },
        isim:{ type:String },
        marka:{ type:String },
        fiyat:{ type:Number },
        aciklama:{ type:String },
        indirim:{ type:Number },
        imagePath1: { type:String },
        count:{ type:Number, required: true},
        renk:{ type:String, required: true }
    }],
    favoriler:[{
        productId:{ type:String, required:true},
        sektor:{ type:String },
        isim:{ type:String },
        marka:{ type:String },
        fiyat:{ type:Number },
        indirim:{ type:Number },
        imagePath1: { type:String },
    }],
    krediKart:[{
        adSoyad:{type:String },
        kartNumarasi:{type:Number},
        month:{type:Number},
        year:{type:Number}
    }],
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('profiles', ProfileSchema);
