const Inventario = require('../models/Inventario')
const { request, response } = require('express')

/**
 * Crear inventario
 */
const createInventario = async (req = request, res = response) => {// endpoint
    //console.log(req.body)

        
    try {
        const inventario = new Inventario(req.body)

        
        const inventarioDB = await Inventario.findOne({ serial:req.body.serial })

        if(inventarioDB) {
            return res.status(400).json({mjs: 'Ya existe serial'})
        }// select * from inventario where nombre = ?
    
        await inventario.save()
        return res.status(201).json(inventario)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getInventarios = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const inventarioDB = await Inventario.find().populate([
                {
                    path: 'usuario', select: 'nombre email estado'
                },
                {
                    path: 'marca', select: 'nombre estado'
                },
                {
                    path: 'tipo_equipo', select: 'nombre estado'
                },
                {
                    path: 'estado_equipo', select: 'nombre estado'
                }
            ])
            console.log(inventarioDB)//select * from genero where estado=?
            return res.json(inventarioDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getInventario = async (req = request, 
    res = response) => {
        try{
            const data = req.body
            const id = req.params.id
            const inventarioDB = await Inventario.findById(id)
            return res.json(inventarioDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateInventarioByID = async (req = request,
    res = response) => {
    try{
        const id = req.params.id
        const data = req.body;
        data.fechaActualizacion = new Date()
        const obj = await Inventario.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(obj)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}
const deleteInventario = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const inventarioDB = await Inventario.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(inventarioDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createInventario, 
    getInventarios,
    getInventario, 
    updateInventarioByID,
    deleteInventario
}