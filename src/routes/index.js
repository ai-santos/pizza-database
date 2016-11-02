const express = require('express')
const router = express.Router()
const Pizza = require( '../database/main' )

router.get( '/', ( request, response, next ) => {
  response.send("INDEX STUFF!")
})

router.get( '/pizza', Pizza.getAll )

router.post( '/pizza', Pizza.add )

module.exports = router
