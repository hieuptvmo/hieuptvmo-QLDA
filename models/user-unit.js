const mongoose = require('mongoose')

const userUnitSchema = new mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    unit_id: {
        type: String,
        require: true
    }
})

module.exports = userUnitSchema