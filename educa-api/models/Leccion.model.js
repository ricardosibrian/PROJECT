const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const LectureSchema = new Schema({
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
        type: String,
    },
    videoLink: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
}, {timestamps : true});

module.exports = Mongoose.model('Lecture', LectureSchema);