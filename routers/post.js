const router = require('express').Router()
const verify = require('../middleware/verifyToken')

router.get('/', verify, (req, res) => {
    // res.json({post: {title: 'A post', description: 'A data'}})
    res.send(req.user)
})

module.exports = router