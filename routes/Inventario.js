const { Router } = require('express')
const {createInventario, getInventarios,  getInventario, updateInventarioByID, deleteInventario} = require('../controllers/Inventario.js')
const { validateJWT } = require('../middleware/validate-jwt.js')

const router = Router()

/**
 * Crear Inventario
 */
router.post('/', validateJWT, createInventario)

/**
 * consultar todos los Inventarios
 */
router.get('/', validateJWT, getInventarios)

/**
 * Consultar un Inventario por su ID
 */
router.get('/:id', validateJWT, getInventario)
/**
 * Actualizar Inventario
 */
router.put('/:id', validateJWT, updateInventarioByID)

/**
 * Borrar un Inventario
 */
router.delete('/:id', validateJWT, deleteInventario)

module.exports = router