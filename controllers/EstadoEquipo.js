const EstadoEquipo = require('../models/EstadoEquipo')
const { request, response } = require('express')

/**
 * Crear estadoEquipo
 */
const createEstadoEquipo = async (req = request, res = response) => {// endpoint
    //console.log(req.body)

        
    try {
        const estadoEquipo = new EstadoEquipo(req.body)

        
        const estadoEquipoDB = await EstadoEquipo.findOne({ nombre:req.body.nombre })

        if(estadoEquipoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from estadoEquipo where nombre = ?
    
        await estadoEquipo.save()
        return res.status(201).json(estadoEquipo)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getEstadoEquipos = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const estadoEquipoDB = await EstadoEquipo.find()
            console.log(estadoEquipoDB)//select * from genero where estado=?
            return res.json(estadoEquipoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getEstadoEquipo = async (req = request, 
    res = response) => {
        try{
            const data = req.body
            const id = req.params.id
            const estadoEquipoDB = await EstadoEquipo.findById(id)
            return res.json(estadoEquipoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateEstadoEquipoByID = async (req = request,
    res = response) => {
    try{
        const id = req.params.id
        const data = req.body;
        data.fechaActualizacion = new Date()
        const obj = await EstadoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(obj)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}
const deleteEstadoEquipo = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const estadoEquipoDB = await EstadoEquipo.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(estadoEquipoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createEstadoEquipo, 
    getEstadoEquipos,
    getEstadoEquipo, 
    updateEstadoEquipoByID,
    deleteEstadoEquipo
}