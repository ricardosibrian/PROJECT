const express = require('express');
const router = express.Router();
const { authentication, authorization } = require('../../middlewares/auth.middlewares');
const ROLES = require('../../data/roles.constants.json');

//Importando middlewares
const leccionController = require('../../controllers/leccion.controller');

//Validadores
const leccionValidators = require('../../validators/leccion.validators');
const runValidations = require('../../validators/index.midleware');

//Todos los lelcciones
router.get('/', leccionController.findAll);

//Lecciones por id
router.get('/:identifier', 
    leccionValidators.findLeccionByIdValidator,
    runValidations,
    leccionController.findOneById);

//Lecciones por curso
router.get('/lecturaByCourse/:identifier', 
    leccionValidators.findLeccionByCourseValidator,
    runValidations,
    leccionController.findByCourse);

//Creando lecciones
router.post('/',
    authentication,
    authorization(ROLES.USER),
    leccionValidators.createLeccionValidator,
    runValidations,
    leccionController.create);

module.exports = router;