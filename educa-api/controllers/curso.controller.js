const Curso = require('../models/Curso.model');
const debug = require('debug')('app:curso-controller');

//Objeto contenedor de metodos
const controller = {};

controller.create = async (req, res) => {
    try {
        const { title, description, image, owner } = req.body;
        const { username } = req.user;

        debug(`Post creado por ${username}`);

        const curso = new Curso({
            title,
            description,
            image,
            owner
        });

        const newCurso = await curso.save();
        if (!newCurso) {
            return res.status(409).json({ error: 'Ocurrio un error al crear el curso' });
        }

        return res.status(201).json(newCurso);
    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findAll = async (req, res) => {
    try {
        const cursos = await Curso.find(); // Dentro del parentesis se le puede pasar un filtro con { clave: valor }

        return res.status(200).json({cursos});

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.findOneById = async (req, res) => {
    try {
        const { identifier } = req.params;

        const curso = await Curso.findById(identifier);

        if (!curso) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }

        return res.status(200).json(curso);

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

controller.deleteOneByID = async (req, res) => {
    try {
        const { identifier } = req.params;
        debug(identifier);
        await Curso.deleteOne({_id: identifier});
        return res.status(200).json({ message: 'Se elimino el curso seleccionado'});
    } catch (error) {
        debug({error});
        return res.status(500).json({ error: 'Error interno de servidor'});
    }
}

module.exports = controller;