const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username:	String,
    email: String,
    password: String,
    passwordExpiry: Date,
    firstName: String,
    middleName: String,
    lastName: String,
    facebook: String,
    google: String,
    token: Array,
    photo: String,
    createdAt: Date,
    updatedAt: Date,
})

const User = mongoose.model('User', UserSchema);

module.exports = User;