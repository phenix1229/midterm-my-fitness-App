const Bmi = require('./models/Bmi');

function calculation (req,res){
const weight = req.body.weight;
const height = req.body.height;
const bmi = weight/(height*height)
return bmi
}

module.exports=calculation;