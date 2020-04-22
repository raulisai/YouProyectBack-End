'use strict'

const User = require('../models/users')
const infUser = require ('../models/InfUser')
const servToken = require('../services/token')

function singIn(req,res){
    var email= req.body.email
    var password = req.body.password
    var passEncriptada = servToken.encriptarToken(email,password)
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'No existe el usuario' })
        
        if(user){
            if(user.password === passEncriptada) {
                req.user = user
                res.status(200).send({
                  message: 'Te has logueado correctamente',
                  token : servToken.createToken(user)
                   
                })
            }else res.send('contraseña incorrecta')
        }
        
      })


    }///end loggin





async function signUp(req,res){
console.log(req.body)
 const email = req.body.email
 const password = req.body.password
 const school = req.body.school
 var passEncriptada = servToken.encriptarToken(email, password)
 User.findOne({email:email}, async function(err, user){
    if(!user) {
        const user = new User({
          email : email,
          password : passEncriptada,
          school : school
       })
  await user.save((err) =>{
     if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
     let resss= servToken.createToken(user)
     console.log(resss)
     return res.status(201).send({token: servToken.createToken(user)})
     
 })

    }else {
        res.send(' ya existe este usuario')   
    }
})

}//end register

async function YouinfUp(req,res){
  var name = req.body.name
  var skill= req.body.skill
  var edad = req.body.edad
  var ProyPr = req.body.ProyPr
  var interest= re.body.interests
  var pathImg = req.body.pathImg


  const user = new User({
    name: name,
    skill: skill,
    edad: edad,
    ProyPr: ProyPr,
    interests: interest,
    pathImgPerf: pathImg
 })
 await user.save((err) =>{
  if (err) return res.status(500).send({ message: `Error al guardar la inf de el usuario: ${err}` })
  return res.status(201).send({status: "informacion guardad de forma correcta" })
  
})
  
}


function informationUser(req,res){
 var user = req.body.email
 infUser.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })
    
    if(user){
          
    }
    
  })


}





module.exports = {
    signUp,
    singIn,
    informationUser,
    YouinfUp
  }