const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email: {
        type: String,
        unique : true,
        required : true
    },
    password: {
        type: String,
        required : true,
        select : false
    },
    date: {
        type: Date,
        default : Date.now
    }

});

// encrypting password before saving
UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
});

// return JSOn web token
UserSchema.methods.getJwtToken = function(){
    return jwt.sign({id : this._id},process.env.JWT_SECRECT,{
        expiresIn : process.env.JWT_EXPIRES_TIME
    });
}

const User = mongoose.model('User', UserSchema);

module.exports = User;