const vToken = require('../middleware/verifyToken')
const router = require('express').Router()
const customer = require('../api/api_customer')

router.post('/', vToken, customer.addCustomer)
router.patch('/:id', vToken, customer.updateCustomer)
router.get('/', vToken, customer.listCustomer)
router.get('/:id', vToken, customer.customerDetail)

module.exports = router