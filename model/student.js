const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const Student = new Schema({
    name: {
        type: String,
        required: true
    },
    enrollmentId: {
        type: String,
        required: true
    },
    programme: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: "Male"
    }
});

module.exports = mongoose.model('student', Student);