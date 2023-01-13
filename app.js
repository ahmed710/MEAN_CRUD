const express = require('express') ; 
const app = express()  ; 
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
 const stuffRoutes = require('./routes/stuff') ; 
 const userRoutes = require('./routes/user') ; 
 const path = require('path');

mongoose.connect('mongodb+srv://database:doremi126@cluster0.lzekra3.mongodb.net/test') ;

app.use(express.json())  ; 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.use('/api/stuff', stuffRoutes) ;
  app.use('/api/auth',userRoutes) ; 
  app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app ; 
