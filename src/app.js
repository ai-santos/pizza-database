const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const routes = require('./routes/index')

const app = express()

app.set( 'views', path.join( __dirname, 'views' ))
app.set( 'view engine', 'pug' )

app.use( logger( 'dev' ))
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false }))
app.use( cookieParser() )
app.use( express.static( path.join( __dirname, 'public' )))

app.use( '/', routes )

// catch 404 and forward to error handler
app.use( ( request, response, next ) => {
  let error = new Error( 'Not Found' )
  error.status = 404
  next( error )
})

// error handlers

// development error handler
// will print stacktrace
if ( app.get( 'env' ) === 'development' ) {
  app.use( ( error, request, response, next ) => {
    response.status( error.status || 500 )
    .json({
     status: 'error',
     message: error
    })
  })
}


// production error handler
// no stacktraces leaked to user
app.use( ( error, request, response, next ) => {
  response.status( error.status || 500 )
  .json({
   status: 'error',
   message: error
  })
})


module.exports = app
