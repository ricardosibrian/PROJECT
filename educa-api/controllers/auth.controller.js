const User = require('../models/User.model');
const debug = require('debug')('app:auth-controller');
const ROLES = require('../data/roles.constants.json');
const { createToken, verifyToken } = require('../utils/jwt.tools');

const controller = {};

controller.register = async (req, res) => {
    try {
        //Obteniendo los datos del usuario
        const { username, email, password } = req.body;

        //Verificando que el usuario no exista
        const user = await User.findOne({ $or: [{ username: username }, { email: email }] });

        if (user) {
            return res.status(409).json({ error: 'Este usuario ya existe' });
        }

        //Encriptando la password
        //Creando usuario y guardando usuario
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            roles: [ROLES.USER]
        });

        await newUser.save();

        return res.status(201).json({ message: 'Usuario creado con exito!' });
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: 'Error inesperado' });
    }
}

controller.login = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        //Verificando que el usuario existe
        const user = await User.findOne({ $or: [{ username: identifier }, { email: identifier }] });

        if (!user) {
            return res.status(404).json({ error: 'El usuario no existe' });
        }

        //Comparando passwords
        if (!user.comparePassword(password)) {
            return res.status(401).json({ error: 'La password es incorrecta' });
        }

        //Logueo exitoso
        const token = createToken(
            user._id, user.email, user.roles
        );
        user.tokens = [token, ...user.tokens.filter(_token => verifyToken(_token)).splice(0, 4)];
        await user.save();

        return res.status(200).json({ token: token });
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: 'Error inesperado' });
    }
}

controller.whoami = async (req, res) => {
    try {
        const { _id, username, email, roles } = req.user;
        return res.status(200).json({ _id, username, email, roles });
    } catch (error) {
        debug(error);
        return res.status(500).json({ error: "Error inesperado" })
    }
}

module.exports = controller;