const jwt = require('jsonwebtoken')
const Person = require('../models/person')

module.exports = async function (req, res, next) {
    // const token = req.header('auth-token')
    // if (!token) return res.status(401).send('Access denied')

    const header = req.headers.authorization;
    if (header) {
        const token = header.split(' ');
        const checkToken = token[1].toString()

        try {
            const verified = jwt.verify(checkToken, process.env.TOKEN_SECRET)
            const admin = await Person.findById(verified._id).exec()
            req.user = admin
            // console.log(admin)
            next()
        } catch (err) {
            res.status(400).send('Invalid token')
        }
    } else {
        res.status(400).send('Invalid token')
    }
}