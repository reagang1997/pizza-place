const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true },
    password: { type: String, required: true },
    points: {type: Number, default: 0}
})

userSchema.methods = {
    checkPassword: function(password){
        // console.log(bcrypt.compareSync(password,this.password))
        return bcrypt.compareSync(password,this.password)
    },
    hashPassword: function(password){
        return bcrypt.hashSync(password, 10)
    }
};

userSchema.pre('save', function (next){
    if (!this.password){
        console.log('No password')
    }else{
        console.log('Password Saved')
        this.password = this.hashPassword(this.password);
        next();
    }
})
const User = mongoose.model("User", userSchema);
module.exports = User;