const mongoose = require('mongoose')

const userProjectSchema = new mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    project_id: {
        type: String,
        require: true
    }
})

module.exports = userProjectSchema