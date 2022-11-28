const { body, param } = require('express-validator');
const validators = {};

validators.createLeccionValidator = [
    body('title')
        .notEmpty().withMessage('El titulo debe ser incluido.'),
    body('description')
        .notEmpty().withMessage('Por favor incluir una descripcion.'),
    body('image')
        .optional()
        .notEmpty().withMessage('Se debe incluir una imagen.')
        .isURL().withMessage('La imagen debe de ser una URL.'),
    body('videoLink')
    .notEmpty().withMessage('Se debe incluir una imagen.')
    .isURL().withMessage('El video debe de ser una URL.'),
    body('course')
        .notEmpty().withMessage('El curso debe ser incluido.')
];


validators.findLeccionByIdValidator = [
    param('identifier')
        .notEmpty().withMessage('El campo id no debe ir vacio.')
        .isMongoId().withMessage('Usar id tipo Mongo porfavor.')
];

validators.findLeccionByCourseValidator = [
    param('identifier')
        .notEmpty().withMessage('El curso no debe ir vacio.')
        .isMongoId().withMessage('Usar id tipo Mongo porfavor.')
];

module.exports = validators;