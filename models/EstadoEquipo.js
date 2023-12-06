const { Schema, model } = require('mongoose')

const EstadoEquipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre estado equipo requerido'],
        unique: true
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo']
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        required: true,
        default: new Date()
    }
})

module.exports = model('EstadoEquipo', EstadoEquipoSchema)