const Bmi = require('./models/Bmi');

function calculation (req.body.weight, req.body.height){
const weight = req.body.weight;
const height = req.body.height;
const bmi = (weight/(height*height)).toFixed(2)
return bmi

}
console.log(calculation())
module.exports=calculation;