const express = require('express')
const { getTodoList } = require('../controller/to-do-list-controller')

const router = express.Router()

router.get('/', (req, res) => {

    getTodoList( (err, data ) => {
        if (err) {
            res.status(500).send(err)
        } else {
            const viewData = {
                list: data
            }
            res.render('home', viewData)
        }
    })


})

module.exports = router
