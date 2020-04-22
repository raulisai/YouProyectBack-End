'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema




const UserSchema= new Schema({
    email: { type: String, lowercase: true },
    password: { type: String },
    school:{ type: String, default: "IPN" }
})


const User = mongoose.model('User',UserSchema)
module.exports = User