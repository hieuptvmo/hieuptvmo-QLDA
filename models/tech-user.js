const mongoose = require('mongoose')

const techUserSchema = new mongoose.Schema({
    tech_id: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    }
})

module.exports = techUserSchema