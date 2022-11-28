const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const InscripcionSchema = new Schema({
    user: {
        type: String,
        trim: true,
        required: true
    },
    courseid: {
        type: String,
        trim: true,
        required: true
    }

    /*, { timestamps: true } para guardar fechas relacionadas al modelo CursoSchema  */
});

module.exports = Mongoose.model('Inscripcion', InscripcionSchema);