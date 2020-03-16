const express = require('express');
const router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('main/welcome', { title: 'Express' });
// });


router.get('/', (req,res)=>{
  return res.render('main/welcome')
})

router.get('/login', (req,res)=>{
  return res.render('main/login')
})
router.get('/register', (req,res)=>{
  return res.render('main/register')
})

module.exports = router;
