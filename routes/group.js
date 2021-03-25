const express = require('express')
const { addGroup } = require('../controller/group-controller')
const homeRouter = require('./home')

const router = express.Router()

router.post('/groups',(req,res)=>{
  const data = req.body
  addGroup(data,(err,data)=>{
    if(err){
      res.status(500).send(err)
    } else{
      const viewData = {
        list: data
    }
    res.render('home', viewData)
    }
  })
})

module.exports = router
