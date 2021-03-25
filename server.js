const express = require('express')
var hbs  = require('express-handlebars')

const server = express()

server.engine('handlebars', hbs())
server.set('view engine', 'handlebars')



module.exports = server


