const express = require('express')
const router = express.Router()
const Person = require('../models/person')
const { registerValidation, loginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Getting all
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
    -
    // Getting one
    router.get('/:id', getPerson, (req, res) => {
        res.json(res.person)
    })

// Creating one
router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Checking existing user
    const personExist = await Person.findOne({ username: req.body.username })
    if (personExist) return res.status(400).send('Username already exists')

    // // Hash password
    // const salt = await bcrypt.genSalt(10)
    // const hashPassword = await bcrypt.hash(req.body.password, salt)

    const person = new Person({
        name: req.body.name,
        status: req.body.status,
        username: req.body.username,
        password: req.body.password
    })
    try {
        const newPerson = await person.save()
        res.send({ person: person._id }) //.status(201).json(newPerson)
    } catch (err) {
        res.status(400).send(err) //.json({ message: err.message }) 
    }
})

// Updating one
router.patch('/:id', getPerson, async (req, res) => {
    if (req.body.name != null) {
        res.person.name = req.body.name
    }
    if (req.body.status != null) {
        res.person.status = req.body.status
    }
    if (req.body.username != null) {
        res.person.username = req.body.username
    }
    if (req.body.password != null) {
        res.person.password = req.body.password
    }
    try {
        const updatePerson = await res.person.save()
        res.json(updatePerson)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting one
router.delete('/:id', getPerson, async (req, res) => {
    try {
        await res.person.remove()
        res.json({ message: 'Deleted person' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getPerson(req, res, next) {
    let person
    try {
        person = await Person.findById(req.params.id)
        if (person == null) {
            return res.status(404).json({ message: 'Cannot find person' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.person = person
    next()
}

// Login
router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Checking existing user
    const user = await Person.findOne({ username: req.body.username })
    if (!user) return res.status(400).send('Username or password is incorrect')

    // Password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password')

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
    res.header('auth-token', token).send(token)
})

module.exports = router