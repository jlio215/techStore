const { Router } = require('express')
const {createUsuario, getUsuarios,  getUsuario, updateUsuarioByID, deleteUsuario} = require('../controllers/Usuario.js')

const router = Router()

/**
 * Crear Usuario
 */
router.post('/', createUsuario)

/**
 * consultar todos los Usuarios
 */
router.get('/', getUsuarios)

/**
 * Consultar un Usuario por su ID
 */
router.get('/:id', getUsuario)
/**
 * Actualizar Usuario
 */
router.put('/:id', updateUsuarioByID)

/**
 * Borrar un Usuario
 */
router.delete('/:id', deleteUsuario)

module.exports = router