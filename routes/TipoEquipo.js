const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos,  getTipoEquipo, updateTipoEquipoByID, deleteTipoEquipo} = require('../controllers/TipoEquipo.js')

const router = Router()

/**
 * Crear TipoEquipo
 */
router.post('/', createTipoEquipo)

/**
 * consultar todos los TipoEquipos
 */
router.get('/', getTipoEquipos)

/**
 * Consultar un TipoEquipo por su ID
 */
router.get('/:id', getTipoEquipo)
/**
 * Actualizar TipoEquipo
 */
router.put('/:id', updateTipoEquipoByID)

/**
 * Borrar un TipoEquipo
 */
router.delete('/:id', deleteTipoEquipo)

module.exports = router