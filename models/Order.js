const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiparislerSchema = new Schema({
        user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'users'
        },
        urunler:[{
          urunId:{ type:String },
          imagePath:{ type: String},
          marka:{ type: String },
          renk: { type: String },
          fiyat: { type: Number },
          miktar:{ type: Number },
          toplam:{ type: Number },
        }],
        adres:{
          adresTanim:{ type:String},
          adres:{ type:String },
          ilce:{ type:String },
          il:{ type:String },
          telefon:{ type:String },
        },
        krediKart:{
          adSoyad:{ type: String },
          kartNumarasi:{ type: String },
        },
        kargo:{
          firma:{ type:String },
          ucret:{ type:Number }
        },
        date:{
            type:Date,
            default: Date.now
        }

});

module.exports = mongoose.model('siparisler', SiparislerSchema);
