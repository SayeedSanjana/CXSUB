const { application } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users');
});

///products/get-user-details
router.get('/get-user-detail/:id', (req, res) => {
    res.send('Get user details' + req.params.id);
});

router.get('/search-by-location/:state/:city', (req, res) => {
    res.send('Get details for specific user' + req.params.state + req.params.city);
});

module.exports= router;