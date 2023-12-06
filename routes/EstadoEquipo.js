const { Router } = require('express')
const {createEstadoEquipo, getEstadoEquipos,  getEstadoEquipo, updateEstadoEquipoByID, deleteEstadoEquipo} = require('../controllers/EstadoEquipo.js')
const { validateJWT } = require('../middleware/validate-jwt.js')

const router = Router()

/**
 * Crear EstadoEquipo
 */
router.post('/', validateJWT, createEstadoEquipo)

/**
 * consultar todos los EstadoEquipos
 */
router.get('/', validateJWT, getEstadoEquipos)

/**
 * Consultar un EstadoEquipo por su ID
 */
router.get('/:id', validateJWT, getEstadoEquipo)
/**
 * Actualizar EstadoEquipo
 */
router.put('/:id', validateJWT, updateEstadoEquipoByID)

/**
 * Borrar un EstadoEquipo
 */
router.delete('/:id',validateJWT, deleteEstadoEquipo)

module.exports = router