const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    email:{type:String, unique:true, lowercase: true, required: true, trim: true},
    password: {type:String, required: true, trim: true},
    profile: {
        name:{type:String, default:''},
        picture:{type:String, default:''},

    },
    address: {type:String, default:'(Please update Address)'}
});

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(user.password, salt,(err,hash)=>{
            if(err) return next(err)
            user.password =hash;
            next();
        })
    })
})
module.exports=mongoose.model('User', userSchema)