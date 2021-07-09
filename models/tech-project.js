const mongoose = require('mongoose')

const techProjectSchema = new mongoose.Schema({
    tech_id: {
        type: String,
        require: true
    },
    project_id: {
        type: String,
        require: true
    }
})

module.exports = techProjectSchema