const { Router } = require('express')
const {createUsuario, getUsuarios,  getUsuario, updateUsuarioByID, deleteUsuario} = require('../controllers/Usuario.js')
const { validateJWT } = require('../middleware/validate-jwt.js')

const router = Router()

/**
 * Crear Usuario
 */
router.post('/', validateJWT, createUsuario)

/**
 * consultar todos los Usuarios
 */
router.get('/', validateJWT, getUsuarios)

/**
 * Consultar un Usuario por su ID
 */
router.get('/:id', validateJWT, getUsuario)
/**
 * Actualizar Usuario
 */
router.put('/:id', validateJWT, updateUsuarioByID)

/**
 * Borrar un Usuario
 */
router.delete('/:id', validateJWT, deleteUsuario)

module.exports = router