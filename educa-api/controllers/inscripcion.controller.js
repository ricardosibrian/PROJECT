const Inscripcion = require('../models/Inscripcion.model');
const debug = require('debug')('app:inscripcion-controller');

//Objeto contenedor de metodos
const controller = {};

controller.create = async (req, res) => {
    try {
        const { user, courseid } = req.body;
        //const { username } = req.user;

        //debug(`Post creado por ${username}`);

        const inscripcion = new Inscripcion({
            user,
            courseid
        });

        const newInscripcion = await inscripcion.save();
        if (!newInscripcion) {
            return res.status(409).json({ error: 'Ocurrio un error al crear la inscripcion' });
        }

        return res.status(201).json(newInscripcion);
    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findAll = async (req, res) => {
    try {
        const inscripciones = await Inscripcion.find(); // Dentro del parentesis se le puede pasar un filtro con { clave: valor }

        return res.status(200).json({inscripciones});

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findOneById = async (req, res) => {
    try {
        const { identifier } = req.params;

        const inscripcion = await Inscripcion.findById(identifier);

        if (!inscripcion) {
            return res.status(404).json({ error: 'Inscripcion no encontrada' });
        }

        return res.status(200).json(inscripcion);

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.deleteOneByID = async (req, res) => {
    try {
        const { identifier } = req.params;
        debug(identifier);
        await Inscripcion.deleteOne({_id: identifier});
        return res.status(200).json({ message: 'Se elimino la inscripcion seleccionada'});
    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

module.exports = controller;