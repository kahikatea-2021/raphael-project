const express = require('express')
const router = express.Router()
const { addToDoList, itemStatus } = require('../controller/to-do-list-controller')

/*router.get('/todolist/:id', (req, res) => {
  res.send('hehelo')
})*/

router.post('/todoitems/:id/add', (req, res) => {
  const data = req.body
  const groupId = req.params.id
  addToDoList(groupId, data, (err, contents) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.redirect('/')
    }
  })
})

router.post('/todoitems/:id/edit', (req, res) => {
  console.log(req.body)
  const groupId = req.params.id
   itemStatus(groupId,req.body,(err) =>{
     if (err) {
       res.status(500).send(err)
     } else {
       res.redirect('/')
     }
   })



})

module.exports = router
