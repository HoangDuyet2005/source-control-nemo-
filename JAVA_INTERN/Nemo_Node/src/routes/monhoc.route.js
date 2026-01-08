const express = require('express')
const router = express.Router()
const controller = require('../controllers/MonHocController')
router.get('/monhoc', controller.getAll)
router.post('/monhoc', controller.create)
router.get('/monhoc/:maMon', controller.getById)
router.delete('/monhoc/:maMon', controller.delete)
module.exports = router
