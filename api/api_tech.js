// const mongoose = require('mongoose')
const tech = require('../models/tech')

// Add tech
const addTech = async (req, res) => {
    const techs = new tech({
        // _id: new mongoose.Types.ObjectId,
        tech_name: req.body.tech_name,
        tech_createAt: Date.now(),
        tech_createBy: req.user._id
    })
    try {
        const newTech = await techs.save()
        res.send({ techData: techs })
    } catch (err) {
        res.status(500).send(err)
    }
}

// Update tech
const updateTech = async (req, res) => {
    const id = req.params.id
    const tech_updateAt = Date.now()
    const tech_updateBy = req.user._id
    try {
        const checkTech = await tech.findById(id).exec()
        if (checkTech) {
            tech.update({ _id: id }, {
                tech_name: req.body.tech_name,
                tech_updateAt,
                tech_updateBy
            }).exec()
            return res.status(200).json({
                message: 'Tech updated'
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

// List tech
const listTech = async (req, res) => {
    try {
        const list = await tech.find().exec()
        return res.status(200).json({
            list: list
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

// Tech by id
const techDetail = async (req, res) => {
    const id = req.params.id
    try {
        if (id != null) {
            const detail = await tech.findById(id).exec()
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
    addTech,
    updateTech,
    listTech,
    techDetail
}