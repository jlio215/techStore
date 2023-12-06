const { Router } = require('express')
const {createMarca, getMarcas,  getMarca, updateMarcaByID, deleteMarca} = require('../controllers/Marca.js')
const { validateJWT } = require('../middleware/validate-jwt.js')

const router = Router()

/**
 * Crear Marca
 */
router.post('/', validateJWT, createMarca)

/**
 * consultar todos los Marcas
 */
router.get('/', validateJWT, getMarcas)

/**
 * Consultar un Marca por su ID
 */
router.get('/:id', validateJWT, getMarca)
/**
 * Actualizar Marca
 */
router.put('/:id', validateJWT, updateMarcaByID)

/**
 * Borrar un Marca
 */
router.delete('/:id', validateJWT, deleteMarca)

module.exports = router