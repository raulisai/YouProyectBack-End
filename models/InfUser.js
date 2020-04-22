'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema




const UserSchema= new Schema({
    name: { type: String, lowercase: true },
    skill: { type: String },
    edad:{ type: Number },
    ProyPr: { type: String, default: "you no have proyects"},
    interests: {type: String, default: "What do you like to do"},
    pathImgPerf: {type: String}
})


const infUser = mongoose.model('infUser',UserSchema)
module.exports = infUser