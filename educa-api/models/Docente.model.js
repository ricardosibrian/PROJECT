const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const DocenteSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = Mongoose.model('Docente', DocenteSchema);