const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
    type_name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('type', typeSchema)