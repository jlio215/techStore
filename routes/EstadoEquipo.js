const { Router } = require('express')
const {createEstadoEquipo, getEstadoEquipos,  getEstadoEquipo, updateEstadoEquipoByID, deleteEstadoEquipo} = require('../controllers/EstadoEquipo.js')

const router = Router()

/**
 * Crear EstadoEquipo
 */
router.post('/', createEstadoEquipo)

/**
 * consultar todos los EstadoEquipos
 */
router.get('/', getEstadoEquipos)

/**
 * Consultar un EstadoEquipo por su ID
 */
router.get('/:id', getEstadoEquipo)
/**
 * Actualizar EstadoEquipo
 */
router.put('/:id', updateEstadoEquipoByID)

/**
 * Borrar un EstadoEquipo
 */
router.delete('/:id', deleteEstadoEquipo)

module.exports = router