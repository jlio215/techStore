const { Router } = require('express')
const {createInventario, getInventarios,  getInventario, updateInventarioByID, deleteInventario} = require('../controllers/Inventario.js')

const router = Router()

/**
 * Crear Inventario
 */
router.post('/', createInventario)

/**
 * consultar todos los Inventarios
 */
router.get('/', getInventarios)

/**
 * Consultar un Inventario por su ID
 */
router.get('/:id', getInventario)
/**
 * Actualizar Inventario
 */
router.put('/:id', updateInventarioByID)

/**
 * Borrar un Inventario
 */
router.delete('/:id', deleteInventario)

module.exports = router