const { body, param } = require('express-validator');
const validators = {};

validators.createDocenteValidator = [
    body('name')
        .notEmpty().withMessage('El nombre debe ser incluido.'),
    body('email')
        .notEmpty().withMessage('Por favor incluir una descripcion.')
];


validators.findDocenteByIdValidator = [
    param('identifier')
        .notEmpty().withMessage('El campo id no debe ir vacio.')
        .isMongoId().withMessage('Usar id tipo Mongo porfavor.')
];

module.exports = validators;