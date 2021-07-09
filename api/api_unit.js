// const mongoose = require('mongoose')
const unit = require('../models/unit')
const Person = require('../models/person')

// Add unit
const addUnit = async (req, res) => {
    // Validate
    const findId = await Person.findOne({ _id: req.body.admin_id })
    console.log(findId)
    if (!findId) return res.status(400).json({ message: 'Invalid Id' })

    const units = new unit({
        // admin_id: req.user._id,
        admin_id: req.body.admin_id,
        unit_des: req.body.unit_des,
        dateFound: req.body.dateFound,
        unit_createAt: Date.now(),
        unit_createBy: req.user._id
    })
    try {
        const newUnit = await units.save()
        res.send({ unitData: units })
    } catch (err) {
        res.status(500).send(err)
    }
}

// Update unit
const updateUnit = async (req, res) => {
    const id = req.params.id
    const unit_updateAt = Date.now()
    const unit_updateBy = req.user._id
    try {
        // Validate
        const findId = await Person.findOne({ _id: req.body.admin_id })
        console.log(findId)
        if (!findId) return res.status(400).json({ message: 'Invalid Id' })
        const checkUnit = await unit.findById(id).exec()
        if (checkUnit) {
            unit.update({ _id: id }, {
                admin_id: req.body.admin_id,
                unit_des: req.body.unit_des,
                unit_updateAt,
                unit_updateBy
            }).exec()
            return res.status(200).json({
                message: 'Unit updated'
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

// List unit
const listUnit = async (req, res) => {
    try {
        const list = await unit.find().exec()
        return res.status(200).json({
            list: list
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

// Unit by id
const unitDetail = async (req, res) => {
    const id = req.params.id
    try {
        if (id !== null) {
            const detail = await unit.findById(id).exec()
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
    addUnit,
    updateUnit,
    listUnit,
    unitDetail
}