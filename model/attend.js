const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const Attendance = new Schema({
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
    date: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        default: "Absent"
    }
});

module.exports = mongoose.model('Attendance', Attendance);