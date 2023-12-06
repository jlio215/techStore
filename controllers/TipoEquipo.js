const TipoEquipo = require('../models/TipoEquipo')
const { request, response } = require('express')

/**
 * Crear tipoEquipo
 */
const createTipoEquipo = async (req = request, res = response) => {// endpoint
    //console.log(req.body)

        
    try {
        const tipoEquipo = new TipoEquipo(req.body)

        
        const tipoEquipoDB = await TipoEquipo.findOne({ nombre:req.body.nombre })

        if(tipoEquipoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from tipoEquipo where nombre = ?
    
        await tipoEquipo.save()
        return res.status(201).json(tipoEquipo)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getTipoEquipos = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const tipoEquipoDB = await TipoEquipo.find()
            console.log(tipoEquipoDB)//select * from genero where estado=?
            return res.json(tipoEquipoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getTipoEquipo = async (req = request, 
    res = response) => {
        try{
            const data = req.body
            const id = req.params.id
            const tipoEquipoDB = await TipoEquipo.findById(id)
            return res.json(tipoEquipoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateTipoEquipoByID = async (req = request,
    res = response) => {
    try{
        const id = req.params.id
        const data = req.body;
        data.fechaActualizacion = new Date()
        const obj = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(obj)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}
const deleteTipoEquipo = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const tipoEquipoDB = await TipoEquipo.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(tipoEquipoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createTipoEquipo, 
    getTipoEquipos,
    getTipoEquipo, 
    updateTipoEquipoByID,
    deleteTipoEquipo
}