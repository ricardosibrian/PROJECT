const express = require('express');
const router = express.Router();

//Importar todos los enrutadores
const cursoRouter = require('./curso.router');
const leccionRouter = require('./leccion.router');
const authRouter = require('./auth.router');
const docenteRouter = require('./docente.router');
const inscripcionRouter = require('./inscripcion.router');

//Definir las rutas
router.use('/auth', authRouter);
router.use('/curso', cursoRouter);
router.use('/leccion', leccionRouter);
router.use('/docente', docenteRouter);
router.use('/inscripcion', inscripcionRouter);
module.exports = router;