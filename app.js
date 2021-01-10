const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path');


const users = require('./routes/api/users');
const admin = require('./routes/api/admin');
const profiles = require('./routes/api/profiles');
const products = require('./routes/api/products');
const orders = require('./routes/api/orders');
const stripe = require('./routes/api/stripe');
const session = require('express-session');





app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/images", express.static(path.join("images")));

//app.use("/", express.static(path.join(__dirname, "client/src")));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'gizli bir anahtar kullanıldı', resave: false, saveUninitialized: false}))

const db = require('./config/config').mongoURI;
mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true, useUnifiedTopology:true})
                    .then(()=> console.log("mongo db connected"))
                    .catch ((err)=> console.log(err));

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build')) 
}



app.use('/api/users', users);
app.use('/api/admin', admin);
app.use('/api/profiles', profiles);
app.use('/api/products', products);
app.use('/api/orders', orders);
app.use('/api/stripe', stripe);





module.exports = app;
