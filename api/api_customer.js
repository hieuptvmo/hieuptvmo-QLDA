const mongoose = require('mongoose')
const customer = require('../models/customer')
const Project = require('../models/project')

// Add customer
const addCustomer = async (req, res) => {
    const customers = new customer({
        _id: new mongoose.Types.ObjectId,
        customer_name: req.body.customer_name,
        customer_des: req.body.customer_des,
        customer_createAt: Date.now(),
        customer_createBy: req.user._id
    })
    // console.log(customers)
    try {
        const newCustomer = await customers.save()
        res.send({ customerData: customers })
    } catch (err) {
        res.status(500).send(err)
    }
}


// Update customer
const updateCustomer = async (req, res) => {
    const id = req.params.id
    const customer_updateBy = req.user._id
    const customer_updateAt = Date.now()
    try {
        const checkCustomer = await customer.findById(id).exec()
        if (checkCustomer) {
            customer.update({ _id: id }, {
                customer_name: req.body.customer_name,
                customer_des: req.body.customer_des,
                customer_updateBy,
                customer_updateAt
            }).exec()
            return res.status(200).json({
                message: 'Customer updated'
            })
        } else {
            return res.status(404).json({
                message: 'Invalid ID'
            })
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

// List customer
const listCustomer = async (req, res) => {
    try {
        const list = await customer.find().exec()
        return res.status(200).json({
            list: list
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

// Customer by id
const customerDetail = async (req, res) => {
    const id = req.params.id
    try {
        if (id !== null) {
            const detail = await customer.findById(id).exec()
            return res.status(200).json({
                message: detail
            })
        } else {
            return res.status(404).json({
                message: 'Invalid ID'
            })
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = {
    addCustomer,
    updateCustomer,
    listCustomer,
    customerDetail,

}