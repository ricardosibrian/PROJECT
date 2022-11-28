const { body, param } = require('express-validator');
const validators = {};

validators.createInscripcionValidator = [
    body('user')
        .notEmpty().withMessage('El user debe ser incluido.'),
    body('courseid')
        .notEmpty().withMessage('Por favor incluir un course id.'),
];

validators.findInscripcionByIdValidator = [
    param('identifier')
        .notEmpty().withMessage('El campo id no debe ir vacio.')
        .isMongoId().withMessage('Usar id tipo Mongo porfavor.')
];

module.exports = validators;