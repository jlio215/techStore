const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({mensaje: 'Error unauthorized'})
    }
    try {
        const payload = jwt.verify(token, '123456');
        console.log(payload)
        req.payload = payload;
        next();
    } catch (error) {
        return res.status(401).json({mensaje: 'Error unauthorized'})
    }
}

module.exports = {
    validateJWT
}