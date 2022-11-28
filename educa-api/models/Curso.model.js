const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const CursoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String
    },
    owner: {
        type: String
    }

    /*, { timestamps: true } para guardar fechas relacionadas al modelo CursoSchema  */
});

module.exports = Mongoose.model('Curso', CursoSchema);