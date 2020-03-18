const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator')
const Bmi = require('./models/Bmi');
const bmiValidation = require('./bmiValidation')


router.get('/bmi', (req,res)=>{
    return res.render('main/bmi')
    });

router.get('/track', (req,res)=>{
    return res.render('main/track')
    })





module.exports=router;