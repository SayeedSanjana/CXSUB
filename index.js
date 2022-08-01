const express = require('express'); //imported express
const mongoose = require('mongoose'); //imported mongoose
const app= express(); //instance express
require('dotenv').config(); //dotenv
app.listen(3000, () => {
    console.log('Server started on port 3000');
});