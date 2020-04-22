'use strict'

const InfUser = require('../models/InfUser')


function saveInfUser(req, res) {
    console.log('POST /api/saveInfUser')
    console.log(req.body)
  
    const name = req.body.name
    const skill = req.body.skill
    const edad = req.body.edad
    const ProyectPr = req.body.ProyectPr
    const interest = req.body.interest
    const pathImgPerfil = req.body.pathImgPerfil

    const infUsuario = new InfUser({
      nameProyec: namProy,
      pathImgProyect: pathImg,
      descripcionProyect: desProyect,
      numParticipants: numPart,
      advance: advance
    })

    await InfUser.save((err, infUser) => {
      if (err) return res.status(500).send({ message: `Error al guardar infomacion: ${err}` })

      return res.status(201).send({
        status: "se Guardo la Informacion",
        infUser: infUser
      })

    })
  
   
  
  } //end saveProyect

function getInfUser(req,res) {
  const User= req.body.idUsr
  InfUser.findOne({ id: User}, (err, infUser) => {
    if (err) return res.status(500).send({ message: err })
    if (!infUser) return res.status(404).send({ message: 'No existe este informacion' })

    if (infUser) {
      res.status(200).send({ infUser })
    }
 
  })

}//end getInfUser

function updateInfUser(req, res) {
  let infUserId = req.body.infUserId
  let update = req.body
  InfUser.findByIdAndUpdate(infUserId, update, (err, infUserUpdate) => {
    if (err) return res.status(500).send({ error: err })
    res.status(200).send({ proyectoActualizado: infUserUpdate })
  })
}// end Update Proyect


  
  module.exports = {
    saveInfUser,
    getInfUser,
    updateInfUser
  }  