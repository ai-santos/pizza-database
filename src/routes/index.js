// import express from 'express'
// import Topping from '../database/toppings'
// import Size from '../database/sizes'

const express = require('express')
const Pizza = require('../database/pizzas')
const Drink = require('../database/drinks')
const Customer = require('../database/customers')

const router = express.Router()

/*Static files*/
router.get('/', (request, response, next) => {
  response.render('index')
})
/* Topping API routes */
router.post( '/toppings', Pizza.topping.add )
router.get( '/toppings', Pizza.topping.getAll )
router.get( '/toppings/:name', Pizza.topping.getOne )
router.put('/toppings/:name', Pizza.topping.update )
router.delete( '/toppings/:name', Pizza.topping.delete )

/* Size API routes */
router.post( '/sizes', Pizza.size.add )
router.get( '/sizes', Pizza.size.getAll )
router.get( '/sizes/:option', Pizza.size.getOne )
router.put( '/sizes/:name', Pizza.size.update )
router.delete( '/sizes/:name', Pizza.size.delete )

/* Pizza API routes */
router.post( '/pizzas', Pizza.add )
router.get( '/pizzas', Pizza.getAll )
router.get( '/pizzas/:id', Pizza.getOne )
router.put( '/pizzas/:id', Pizza.update )
router.delete( '/pizzas/:id', Pizza.delete )

/* Drink API routes */
router.post( '/drinks', Drink.add )
router.get( '/drinks', Drink.getAll )
router.get( '/drinks/:name', Drink.getOne )
router.put( '/drinks/:name', Drink.update )
router.delete( '/drinks/:name', Drink.delete )

/* Customer API routes */
router.post( '/customer', Customer.add )
router.get( '/customer', Customer.getAll )
router.get( '/customer/:id', Customer.getOne )
router.put( '/customer/:id', Customer.update )
router.delete( '/customer/:id', Customer.delete )

router.post( '/customer/:id/cards', Customer.addCard )

router.get( '/customer/:id/cards', Customer.getCards )

router.post( '/creditCard', Customer.creditCard.add )
router.get( '/creditCard', Customer.creditCard.getAll )
router.get( '/creditCard/:id', Customer.creditCard.getOne )
router.put( '/creditCard/:id', Customer.creditCard.update )
router.delete( '/creditCard/:id', Customer.creditCard.delete )



module.exports = router
// export { router }
