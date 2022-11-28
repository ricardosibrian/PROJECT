const express = require('express');
const router = express.Router();
const { authentication, authorization } = require('../../middlewares/auth.middlewares');
const ROLES = require('../../data/roles.constants.json');

//Importando middlewares
const inscripcionController = require('../../controllers/inscripcion.controller');

//Validadores
const inscripcionValidators = require('../../validators/inscripcion.validators');
const runValidations = require('../../validators/index.midleware');

//Todos los cursos
router.get('/', inscripcionController.findAll);

//Cursos por id
router.get('/:identifier', 
inscripcionValidators.findInscripcionByIdValidator,
    runValidations,
    inscripcionController.findOneById);

//Creando cursos
router.post('/',

    inscripcionController.create);

router.delete('/:identifier',authentication,
    authorization(ROLES.USER),
    inscripcionController.deleteOneByID
);

module.exports = router;