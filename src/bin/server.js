const app = require('../app')
const debug = require('debug')('pizza-database:server')
const http = require('http')


// Takes the port number supplied and normalizes it, returning the port if
// successful otherwise returning the supplied value or returing false.
const normalizePort = ( value ) => {
  let port = parseInt( value, 10 )

  if ( isNaN( port ) ) {
    // named pipe
    return value
  }

  if ( port >= 0 ) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

const onError = ( error ) => {
  if ( error.syscall !== 'listen' ) {
    throw error
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch ( error.code ) {
    case 'EACCES':
      console.error( bind + ' requires elevated privileges' )
      process.exit( 1 )
      break
    case 'EADDRINUSE':
      console.error( bind + ' is already in use' )
      process.exit( 1 )
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  const address = server.address();
  const bind = typeof address === 'string'
    ? 'pipe ' + address
    : 'port ' + address.port
  debug( 'Listening on ' + bind )
}
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort('3000')
app.set('port', port)

const server = http.createServer( app )

server.listen( port )
server.on( 'error', onError )
server.on( 'listening', onListening )
