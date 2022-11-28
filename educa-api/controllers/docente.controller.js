const Docente = require('../models/Docente.model');
const debug = require('debug')('app:docente-controller');

//Objeto contenedor de metodos
const controller = {};

controller.create = async (req, res) => {
    try {
        const { name, email } = req.body;
        const { username } = req.user;

        debug(`Post creado por ${username}`);

        const docente = new Docente({
            name,
            email
        });

        const newDocente = await docente.save();
        if (!newDocente) {
            return res.status(409).json({ error: 'Ocurrio un error al crear el docente' });
        }

        return res.status(201).json(newDocente);
    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findAll = async (req, res) => {
    try {
        const docentes = await Docente.find(); // Dentro del parentesis se le puede pasar un filtro con { clave: valor }

        return res.status(200).json({docentes});

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}


module.exports = controller;