const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos,  getTipoEquipo, updateTipoEquipoByID, deleteTipoEquipo} = require('../controllers/TipoEquipo.js')
const { validateJWT } = require('../middleware/validate-jwt.js')
const { validateRolAdmin } = require('../middleware/validate-rol-admin.js')

const router = Router()

/**
 * Crear TipoEquipo
 */
router.post('/', validateJWT, validateRolAdmin, createTipoEquipo)

/**
 * consultar todos los TipoEquipos
 */
router.get('/', validateJWT, validateRolAdmin, getTipoEquipos)

/**
 * Consultar un TipoEquipo por su ID
 */
router.get('/:id', validateJWT, validateRolAdmin, getTipoEquipo)
/**
 * Actualizar TipoEquipo
 */
router.put('/:id', validateJWT, validateRolAdmin, updateTipoEquipoByID)

/**
 * Borrar un TipoEquipo
 */
router.delete('/:id', validateJWT, validateRolAdmin, deleteTipoEquipo)

module.exports = router