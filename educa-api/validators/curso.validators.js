const { body, param } = require('express-validator');
const validators = {};

validators.createCursoValidator = [
    body('title')
        .notEmpty().withMessage('El titulo debe ser incluido.'),
    body('description')
        .notEmpty().withMessage('Por favor incluir una descripcion.'),
    body('image')
        .optional()
        .notEmpty().withMessage('Se debe incluir una imagen.')
        .isURL().withMessage('La imagen debe de ser una URL.')
];


validators.findCursoByIdValidator = [
    param('identifier')
        .notEmpty().withMessage('El campo id no debe ir vacio.')
        .isMongoId().withMessage('Usar id tipo Mongo porfavor.')
];

module.exports = validators;