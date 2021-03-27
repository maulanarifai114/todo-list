const express = require('express')
const router = express.Router()

const { get } = require('../controller/get')
const { post } = require('../controller/post')
const { put } = require('../controller/put')
const { deleteapi } = require('../controller/delete')

router.get('/', get)
router.post('/', post)
router.put('/', put)
router.delete('/', deleteapi)

module.exports = router
