const express = require('express');
const router = express.Router();
const { authentication, authorization } = require('../../middlewares/auth.middlewares');
const ROLES = require('../../data/roles.constants.json');

//Importando middlewares
const cursoController = require('../../controllers/curso.controller');

//Validadores
const cursoValidators = require('../../validators/curso.validators');
const runValidations = require('../../validators/index.midleware');

//Todos los cursos
router.get('/', cursoController.findAll);

//Cursos por id
router.get('/:identifier', 
    cursoValidators.findCursoByIdValidator,
    runValidations,
    cursoController.findOneById);

//Creando cursos
router.post('/',
    authentication,
    authorization(ROLES.USER),
    cursoValidators.createCursoValidator,
    runValidations,
    cursoController.create);

router.delete('/:identifier',authentication,
    authorization(ROLES.USER),
    cursoController.deleteOneByID
);

module.exports = router;