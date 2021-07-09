const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
    admin_id: {
        type: String,
        require: true
    },
    unit_des: {
        type: String,
        require: true
    },
    dateFound: {
        type: Date,
        require: true
    },
    unit_createAt: {
        type: Date,
        require: true
    },
    unit_createBy: {
        type: String,
        require: true
    },
    unit_updateAt: {
        type: Date
    },
    unit_updateBy: {
        type: String
    },
    unit_isDeleted: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
    }
})

module.exports = mongoose.model('unit', unitSchema)