const express = require( 'express' )
const router = express.Router()
const Topping = require('../database/main')

router.get( '/', ( request, response, next ) => {
  response.status( 200 )
  .json({
          status: 'success',
          message: 'It worked!'
        })
})

router.get( '/toppings', Topping.getAll )

module.exports = router
