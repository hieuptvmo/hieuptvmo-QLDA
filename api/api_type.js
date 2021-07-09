// const mongoose = require('mongoose')
const type = require('../models/type')

// Add type
const addType = async (req, res) => {
    const types = new type({
        // _id: new mongoose.Types.ObjectId,
        type_name: req.body.type_name
    })
    try {
        const newType = await types.save()
        res.send({ typeData: types })
    } catch (err) {
        res.status(500).send(err)
    }
}

// Update type
const updateType = async (req, res) => {
    const id = req.params.id
    try {
        const checkType = await type.findById(id).exec()
        if (checkType) {
            type.update({ _id: id }, {
                type_name: req.body.type_name
            }).exec()
            return res.status(200).json({
                message: 'Type updated'
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

// List type
const listType = async (req, res) => {
    try {
        const list = await type.find().exec()
        return res.status(200).json({
            list: list
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

// Type by id
const typeDetail = async (req, res) => {
    const id = req.params.id
    try {
        if (id != null) {
            const detail = await type.findById(id).exec()
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
    addType,
    updateType,
    listType,
    typeDetail
}