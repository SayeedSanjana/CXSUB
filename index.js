const express = require('express'); //imported express
const mongoose = require('mongoose'); //imported mongoose
const app= express(); //instance express
require('dotenv').config(); //dotenv

const user= require('./routes/users'); //imported user
app.use('/users', user); //use user



const port= process.env.PORT || 3000; //port
app.listen(port, () => {
    console.log('Server started on port 3000');
});
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true, useUnifiedTopology: true},
(err)=>{
    if(err) throw err;
    console.log('Connected to MongoDB');
}); //connect to mongoDB
