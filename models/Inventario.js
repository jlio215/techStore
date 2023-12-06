const { Schema, model } = require('mongoose')

const InventarioSchema = Schema({
    serial: {
        type: String,
        required: [true, 'serial requerido'],
        unique: true
    },
    modelo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    fecha_de_compra: {
        type: Date,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId, ref: 'Usuario',
        required: false,
    },
    marca: {
        type: Schema.Types.ObjectId, ref: 'Marca',
        required: true,
    },
    tipo_equipo: {
        type: Schema.Types.ObjectId, ref: 'TipoEquipo',
        required: true,
    },
    estado_equipo: {
        type: Schema.Types.ObjectId, ref: 'EstadoEquipo',
        required: true,
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

module.exports = model('Inventario', InventarioSchema)