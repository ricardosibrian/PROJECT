const express = require('express');
const router = express.Router();
const { authentication, authorization } = require('../../middlewares/auth.middlewares');
const ROLES = require('../../data/roles.constants.json');

//Importando middlewares
const docenteController = require('../../controllers/docente.controller');

//Validadores
const docenteValidators = require('../../validators/docente.validators');
const runValidations = require('../../validators/index.midleware');

//Todos los docentes
router.get('/', docenteController.findAll);

//Cursos por id


//Creando cursos
router.post('/',
    authentication,
    authorization(ROLES.USER),
    docenteValidators.createDocenteValidator,
    runValidations,
    docenteController.create);

module.exports = router;