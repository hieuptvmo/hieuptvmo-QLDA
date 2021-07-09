const vToken = require('../middleware/verifyToken')
const router = require('express').Router()
const tech = require('../api/api_tech')

router.post('/', vToken, tech.addTech)
router.patch('/:id', vToken, tech.updateTech)
router.get('/', vToken, tech.listTech)
router.get('/:id', vToken, tech.techDetail)

module.exports = router