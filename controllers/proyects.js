'use strict'

const Proyect = require('../models/ProyectUser')

 
function saveProyect(req, res) {
  console.log('POST /api/proyect')
  console.log(req.body)

  const namProy = req.body.nameProyec
  const pathImg = req.body.pathImgProyect
  const desProyect = req.body.descripcionProyect
  const numPart = req.body.numParticipants
  const advance = req.body.advance

  Proyect.findOne({ nameProyec: namProy }, async function (err, proyect) {
    if (!proyect) {
      const Proyecto = new Proyect({
        nameProyec: namProy,
        pathImgProyect: pathImg,
        descripcionProyect: desProyect,
        numParticipants: numPart,
        advance: advance
      })
      await Proyecto.save((err, proyecto) => {
        if (err) return res.status(500).send({ message: `Error al crear proyecto: ${err}` })

        return res.status(201).send({
          status: "se creo el proyecto",
          proyect: proyecto
        })

      })

    } else {
      res.send(' ya existe un proyecto on el mismo nombre')
    }
  })

} //end saveProyect


function getProyect(req,res) {
  const proyec= req.body.namProy
  console.log(proyec)
  Proyect.findOne({ nameProyec: proyec}, (err, proyecto) => {
    if (err) return res.status(500).send({ message: err })
    if (!proyecto) return res.status(404).send({ message: 'No existe el proyecto' })

    if (proyecto) {
      res.status(200).send({ proyecto })
    }
 
  })

}//end ProyectGet


function getProyectos(req, res) {
  Proyect.find({}, (err, proyects) => {
    if (err) return res.status(500).send({ message: err })
    if (!Proyect) return res.status(404).send({ message: 'No existen proyectos' })

    res.status(200).send({ proyects })
  })

}//end ProyectosGet


function updateProyect(req, res) {
  let proyectId = req.body.ProyectId
  let update = req.body
  Proyect.useFindAndModify()
  Proyect.findByIdAndUpdate(proyectId, update, (err, proyectUpdate) => {
    if (err) return res.status(500).send({ error: err })
    res.status(200).send({ proyectoActualizado: proyectUpdate })
  })
}// end Update Proyect


function deleteProyect(req, res) {
  let proyectoId = req.body.ProyectId

  Proyect.findByIdAndDelete(proyectoId, (err, status) => {
    if (err) return res.status(5000).send({ message: err })

    res.status(200).send({ message: status })
  })

}//end delete



module.exports = {
  saveProyect,
  getProyectos,
  getProyect,
  updateProyect,
  deleteProyect
}