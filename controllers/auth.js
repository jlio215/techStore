const Usuario = require('../models/Usuario')
const { request, response } = require('express')
const bycript = require ('bcryptjs')

/**
 * Crear usuario
 */
const createUsuario = async (req = request, res = response) => {// endpoint
    //console.log(req.body)

        
    try {
        const usuario = new Usuario(req.body)

        const salt = bycript.genSaltSync();
        const password = bycript.hashSync(req.body.password, salt);
        usuario.password = password;
        const usuarioDB = await Usuario.findOne({ email:req.body.email })

        if(usuarioDB) {
            return res.status(400).json({mjs: 'Ya existe email'})
        }// select * from usuario where email = ?
    
        await usuario.save()
        return res.status(201).json(usuario)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = { 
    createUsuario
}