const { Router } = require('express')
const {createEstadoEquipo, getEstadoEquipos,  getEstadoEquipo, updateEstadoEquipoByID, deleteEstadoEquipo} = require('../controllers/EstadoEquipo.js')
const { validateJWT } = require('../middleware/validate-jwt.js')
const { validateRolAdmin } = require('../middleware/validate-rol-admin.js')

const router = Router()

/**
 * Crear EstadoEquipo
 */
router.post('/', validateJWT, validateRolAdmin, createEstadoEquipo)

/**
 * consultar todos los EstadoEquipos
 */
router.get('/', validateJWT, validateRolAdmin, getEstadoEquipos)

/**
 * Consultar un EstadoEquipo por su ID
 */
router.get('/:id', validateJWT, validateRolAdmin, getEstadoEquipo)
/**
 * Actualizar EstadoEquipo
 */
router.put('/:id', validateJWT, validateRolAdmin, updateEstadoEquipoByID)

/**
 * Borrar un EstadoEquipo
 */
router.delete('/:id',validateJWT, validateRolAdmin, deleteEstadoEquipo)

module.exports = router