const Lecture = require('../models/Leccion.model');
const debug = require('debug')('app:leccion-controller');

const controller = {};

controller.create = async (req, res) => {
    try {
        const { title, description, image, videoLink, course } = req.body;
        const { username } = req.user;

        debug(`Leccion creada por ${username}`);

        const lecture = new Lecture({
            title,
            description,
            image,
            videoLink,
            course
        });

        const newLecture = await lecture.save();
        if (!newLecture) {
            return res.status(409).json({ error: 'Ocurrio un error al crear la leccion' });
        }

        return res.status(201).json(newLecture);
    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findAll = async (req, res) => {
    try {
        const lectures = await Lecture.find(); // Dentro del parentesis se le puede pasar un filtro con { clave: valor }

        return res.status(200).json({lectures});

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findOneById = async (req, res) => {
    try {
        const { identifier } = req.params;

        const lecture = await Lecture.findById(identifier);

        if (!lecture) {
            return res.status(404).json({ error: 'Leccion no encontrado' });
        }

        return res.status(200).json(lecture);

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findByCourse = async (req, res) => {
    try {
        const { identifier } = req.params;

        const lecture = await Lecture.find({course: identifier});

        if (!lecture) {
            return res.status(404).json({ error: 'Leccion no encontrado' });
        }

        return res.status(200).json(lecture);

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

module.exports = controller;