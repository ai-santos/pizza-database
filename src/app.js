const express = require( 'express' )
//const bodyParser = require( 'body-parser' )
//const path = require( 'path' )
//const morgan = require( 'morgan' )
//const favicon = require( 'serve-favicon' )

const app = express()
const routes = require('./routes/index')

app.use( '/', routes )

module.exports = app
