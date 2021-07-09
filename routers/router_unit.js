const vToken = require('../middleware/verifyToken')
const router = require('express').Router()
const unit = require('../api/api_unit')

router.post('/', vToken, unit.addUnit)
router.patch('/:id', vToken, unit.updateUnit)
router.get('/', vToken, unit.listUnit)
router.get('/:id', vToken, unit.unitDetail)

module.exports = router