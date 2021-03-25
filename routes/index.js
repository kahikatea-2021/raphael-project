const express = require('express')
const homeRouter = require('./home')
const groupRouter = require('./group')


const router = express.Router()

router.use(homeRouter)
router.use(groupRouter)

module.exports = router
