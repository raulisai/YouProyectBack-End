'use strict'

const express = require('express')
const userCtrl= require('../controllers/user')
const ProyectCtrl = require('../controllers/proyects')
const api = express.Router()
const auth = require('../middlewares/auth')



//inicio de session
api.post('/singUp',userCtrl.signUp)
api.post('/singIn',userCtrl.singIn)
//Manejo de Proyectos
api.post('/saveProyect',auth, ProyectCtrl.saveProyect)
api.post('/updateProyect',auth, ProyectCtrl.updateProyect)
api.post('/deleteProyect',auth, ProyectCtrl.deleteProyect)
api.get('/getProyects',auth, ProyectCtrl.getProyectos)
api.get('/getOneProyect',auth, ProyectCtrl.getProyect)


module.exports = api