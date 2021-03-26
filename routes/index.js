const express = require('express')
const homeRouter = require('./home')
const groupRouter = require('./group')
const todoRouter = require('./todolist')

const router = express.Router()

router.use(homeRouter)
router.use(todoRouter)
router.use(groupRouter)

module.exports = router
