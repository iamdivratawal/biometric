const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const Teacher = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    teacher_id: {
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

module.exports = mongoose.model('teacher', Teacher);