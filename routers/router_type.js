const vToken = require('../middleware/verifyToken')
const router = require('express').Router()
const type = require('../api/api_type')

router.post('/', vToken, type.addType)
router.patch('/:id', vToken.apply, type.updateType)
router.get('/', vToken, type.listType)
router.get('/:id', vToken, type.typeDetail)

module.exports = router