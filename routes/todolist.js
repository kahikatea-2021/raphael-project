const express = require('express')
const router = express.Router()

router.get('/todolist/:id', (req, res) => {
  res.send('hehelo')
})

module.exports = router
