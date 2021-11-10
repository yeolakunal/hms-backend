const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        required: true,
    },
    lastVisited: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("Patient", patientSchema);
