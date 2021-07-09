const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        require: true
    },
    project_des: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    project_status: {
        type: String,
        require: true
    },
    // project_date: {
    //     type: date,
    //     require: true
    // },
    project_createAt: {
        type: Date,
        require: true
    },
    project_createBy: {
        type: String,
        require: true
    },
    project_updateAt: {
        type: Date
    },
    project_updateBy: {
        type: String
    },
    project_isDeleted: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
    }
})

module.exports = mongoose.model('Project', projectSchema)