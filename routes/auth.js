const { Router } = require('express')
const {createUsuario} = require('../controllers/auth.js')

const router = Router()

/**
 * Crear EstadoEquipo
 */
router.post('/', createUsuario)
