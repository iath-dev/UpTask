const { request, response } = require('express')
const { validationResult } = require('express-validator')

/**
 * @function fieldValidator
 * @description
 * Método que permite validar los campos de un pedido al servidor
 * @param {Object} req - Pedido realizado al servidor
 * @param {Object} res - Respuesta del servidor
 * @param {Function} next - Callback para continuar con la operación
 */
const fieldValidator = (req = request, res = response, next = function(){}) => {

    const errors = validationResult(req)

    req.errors = errors.array()

    next()
}

module.exports = fieldValidator
