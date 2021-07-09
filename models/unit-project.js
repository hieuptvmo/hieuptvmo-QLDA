const mongoose = require('mongoose')

const unitProjectSchema = new mongoose.Schema({
    project_id: {
        type: String,
        require: true
    },
    unit_id: {
        type: String,
        require: true
    }
})

module.exports = unitProjectSchema