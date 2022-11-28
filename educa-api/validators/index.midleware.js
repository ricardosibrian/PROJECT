const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    //Validacion de parametros
    const errors = validationResult(req);

    //Verificacion de error
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array().map( error => ({
                field: error.param,
                message: error.msg
            }))
        });
    }


    //Pasar al siguiente midleware
    next();
}