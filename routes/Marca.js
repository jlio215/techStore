const { Router } = require('express')
const {createMarca, getMarcas,  getMarca, updateMarcaByID, deleteMarca} = require('../controllers/Marca.js')

const router = Router()

/**
 * Crear Marca
 */
router.post('/', createMarca)

/**
 * consultar todos los Marcas
 */
router.get('/', getMarcas)

/**
 * Consultar un Marca por su ID
 */
router.get('/:id', getMarca)
/**
 * Actualizar Marca
 */
router.put('/:id', updateMarcaByID)

/**
 * Borrar un Marca
 */
router.delete('/:id', deleteMarca)

module.exports = router