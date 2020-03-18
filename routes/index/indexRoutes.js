const express = require('express');
const router = express.Router();
require('../../lib/passport')


router.get('/about', (req,res)=>{
    return res.render('main/about')
});

router.get('/', function(req, res, next) {
    return res.render('index', { title: 'Express' });
});




module.exports= router