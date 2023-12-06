const { Router } = require('express')
const {createMarca, getMarcas,  getMarca, updateMarcaByID, deleteMarca} = require('../controllers/Marca.js')
const { validateJWT } = require('../middleware/validate-jwt.js')
const { validateRolAdmin } = require('../middleware/validate-rol-admin.js')

const router = Router()

/**
 * Crear Marca
 */
router.post('/', validateJWT, validateRolAdmin, createMarca)

/**
 * consultar todos los Marcas
 */
router.get('/', validateJWT, validateRolAdmin, getMarcas)

/**
 * Consultar un Marca por su ID
 */
router.get('/:id', validateJWT, validateRolAdmin, getMarca)
/**
 * Actualizar Marca
 */
router.put('/:id', validateJWT, validateRolAdmin, updateMarcaByID)

/**
 * Borrar un Marca
 */
router.delete('/:id', validateJWT, validateRolAdmin, deleteMarca)

module.exports = router