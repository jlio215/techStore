const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos,  getTipoEquipo, updateTipoEquipoByID, deleteTipoEquipo} = require('../controllers/TipoEquipo.js')
const { validateJWT } = require('../middleware/validate-jwt.js')

const router = Router()

/**
 * Crear TipoEquipo
 */
router.post('/', validateJWT, createTipoEquipo)

/**
 * consultar todos los TipoEquipos
 */
router.get('/', validateJWT, getTipoEquipos)

/**
 * Consultar un TipoEquipo por su ID
 */
router.get('/:id', validateJWT, getTipoEquipo)
/**
 * Actualizar TipoEquipo
 */
router.put('/:id', validateJWT, updateTipoEquipoByID)

/**
 * Borrar un TipoEquipo
 */
router.delete('/:id', validateJWT, deleteTipoEquipo)

module.exports = router