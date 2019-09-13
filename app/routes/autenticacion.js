const express = require('express');
const router = express.Router();

const autenticacionController = require('../controllers/autenticacion');

/**
 * @swagger
 * /Autenticacion/login/{usuario}/{clave}:
 *      get:
 *          tags:
 *              - Autenticacion
 *          produces:
 *              - application/json
 *          parameters:
 * 
 *              - name: usuario
 *                in: path
 *                required: true
 *                type: string
 *              - name: clave
 *                in: path
 *                required: true
 *                type: string
 *          responses:
 *              200:
 *                  description: Success
 */
router.get('/login/:usuario' +
    '/:clave',
autenticacionController.Login);

module.exports = router;