const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({
    tech_name: {
        type: String,
        require: true
    },
    tech_createAt: {
        type: Date,
        require: true
    },
    tech_createBy: {
        type: String,
        require: true
    },
    tech_updateAt: {
        type: Date
    },
    tech_updateBy: {
        type: String
    },
    tech_isDeleted: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
    }
})

module.exports = mongoose.model('tech', techSchema)