const express = require('express');
const router = express.Router();
const userValidation = require('./userValidation');
const User = require('./models/User');
const passport=require('passport');
const userController =require('./controllers/userController')
const {register} = require('./controllers/userController')
require('../../lib/passport')
// const userController = require('./controllers/userController')

router.get('/', (req,res)=>{
  return res.render('main/welcome')
})


router.get('/login', (req,res)=>{
  return res.render('main/login')
})

router.post('/login', 
  passport.authenticate('local-login',{
  successRedirect: '/users/bmi',
  failureRedirect:'/users/login',
  failureFlash:true
}))

router.get('/register', (req,res)=>{
  return res.render('main/register')
})

router.get('/', (req,res)=>{
  //empty object allows us to fill with users
  User.find({})
  .then(users=>{
    return res.status(200).json({message:'success', users})
  }).catch(err=> res.status(500).json({message:'Server error'}))
});

router.post('/register',userValidation, register)


router.put('/update-profile', (req,res)=>{
  userController.updateProfile(req.body,req.user._id)
  .then((user)=> {
    return res.redirect('/api/users/profile')
  }).catch((err)=> {
    console.log(err)
    return res.redirect('/api/users/update-profile')
  })
  });


  router.get('/update-profile', (req,res)=>{
    if(req.isAuthenticated()){
    return res.render('auth/update-profile')
    }
    return res.redirect('/')
  })


  //update password
  router.put('/update-password',(req,res)=>{
    userController.updatePassword(req.body, req.user._id)
    .then((user)=>{
      return res.redirect('/api/users/profile');
    }).catch(err=>{
      return res.redirect('/api/users/update-profile')
    });
  });
module.exports = router;
