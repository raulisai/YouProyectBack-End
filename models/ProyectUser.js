'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema




const UserSchema= new Schema({
    nameProyec: { type: String, lowercase: true },
    pathImgProyect: { type: String, default: "public/imgProyc/defaultProyect.jpg" },
    descripcionProyect:{ type: String },
    numParticipants: {type: String, default: "you have no participants"},
    advance: {type: String}
})


const ProyecUser = mongoose.model('Proyect',UserSchema)

module.exports = ProyecUser
