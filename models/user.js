const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    id_card: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    tech: {
        type: String,
        require: true
    },
    yearsOfExperience: {
        type: Number,
        require: true
    },
    foreignLanguage: {
        type: String,
        require: true
    },
    cert: {
        type: String,
        require: true
    },
    user_createAt: {
        type: Date,
        require: true
    },
    user_createBy: {
        type: String,
        require: true
    },
    user_updateAt: {
        type: Date
    },
    user_updateBy: {
        type: String
    },
    user_isDeleted: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
    }
})

module.exports = mongoose.model('User', usercSchema)