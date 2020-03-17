const {check} = require('express-validator')

const bmiValidation = [
    check('weight', 'weight is required')
    .not()
    .isEmpty(),
    check('height' , 'height is required')
    .isEmail(),
    ]

    module.exports= bmiValidation