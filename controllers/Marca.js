const Marca = require('../models/Marca')
const { request, response } = require('express')

/**
 * Crear marca
 */
const createMarca = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    try {
        const marca = new Marca(req.body)
        console.log(marca)

        
        const marcaDB = await Marca.findOne({ nombre:req.body.nombre })

        if(marcaDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from marca where nombre = ?
    
        await marca.save()
        return res.status(201).json(marca)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getMarcas = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const marcaDB = await Marca.find()
            console.log(marcaDB)
            return res.json(marcaDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general' + e
            })
        }
}

const getMarca = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const marcaDB = await Marca.findById(id)
            return res.json(marcaDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general' + e
            })
        }
}

//TODO
const updateMarcaByID = async (req = request,
    res = response) => {
    try{
        const marca = new Marca(req.body);
        const id = req.params.id
        const data = req.body;
        data.fechaActualizacion = new Date()
        const obj = await Marca.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(obj)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}
const deleteMarca = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const marcaDB = await Marca.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(marcaDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createMarca, 
    getMarcas,
    getMarca, 
    updateMarcaByID,
    deleteMarca
}