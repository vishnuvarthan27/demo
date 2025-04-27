const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    regno: String,
    cgpa: Number,
    dept: String
});

// Correct model creation:
const studentModel = mongoose.model("Students", studentSchema, "Students");

module.exports = studentModel;
