const Bmi = require('./models/Bmi');

function calculation (req,res){
const weight = req.body.weight;
const height = req.body.height;
const bmi = paseInt(weight/(height*height))
return bmi

}
console.log(calculation())
module.exports=calculation;