//import express from 'express'
//import Topping from '../ian-queries'
const express = require('express')
const Topping = require('../database/ian-queries')
const Size = require('../database/sizes')

//const { Topping } = require('../ian-queries')

const router = express.Router()

/*Static files*/
router.get('/', (request, response, next) => {
  response.render('index')
})

router.get( '/toppings', Topping.getAll )

router.get( '/sizes', Size.getAll )

module.exports = router
