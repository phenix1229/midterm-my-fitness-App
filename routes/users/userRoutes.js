const express = require('express');
const router = express.Router();
const userValidation = require('./userValidation');
const User = require('./models/User');
const bcrypt = require('bcryptjs')
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('main/welcome', { title: 'Express' });
// });

// welcome page
router.get('/', (req,res)=>{
  return res.render('main/welcome')
})

// get login page 
router.get('/login', (req,res)=>{
  return res.render('main/login')
})



// get register page
router.get('/register', (req,res)=>{
  return res.render('main/register')
})


router.post('/register', (req,res,next)=>{

User.findOne({email:req.body.email})
.then((user)=>{
  if(user) return console.log('User exists');
  
else {
  
  const newUser = new User();
  // const salt= bcrypt.genSaltSync(10);
  // const hash = bcrypt.hashSync(req.body.password,salt)

  newUser.profile.name = req.body.password
  newUser.email = req.body.email;
  newUser.password = req.body.password;


  newUser.save()
  .then((user)=> {
    if(user){
      res.status(200).json({message:'success', user})
    }
  }).catch(err=>{
    return next(err);
  })
}
})
})


// router.post('/register',userValidation, createUserCart)


module.exports = router;
