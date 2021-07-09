const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_name: {
        type: String,
        require: true
    },
    customer_des: {
        type: String,
        require: true
    },
    customer_createAt: {
        type: Date,
        require: true
    },
    customer_createBy: {
        type: String,
        require: true
    },
    customer_updateAt: {
        type: Date
    },
    customer_updateBy: {
        type: String
    },
    customer_isDeleted: {
        type: Number,
        default: 0,
        max: 1,
        min: 0
    }
})

module.exports = mongoose.model('customer', customerSchema)