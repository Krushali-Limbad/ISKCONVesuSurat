const mongoose = require('mongoose');
const { emit } = require('nodemon');

const { Schema } = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: date,
        default: date.now
    },

})

module.exports = mongoose.model('notes', NotesSchema)