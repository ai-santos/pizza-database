'use strict';

// import express from 'express'
// import Topping from '../database/toppings'
// import Size from '../database/sizes'

var express = require('express');
var Pizza = require('../database/pizzas');

var router = express.Router();

/*Static files*/
router.get('/', function (request, response, next) {
  response.render('index');
});

router.post('/toppings', Pizza.topping.add);
router.get('/toppings', Pizza.topping.getAll);
router.get('/toppings/:name', Pizza.topping.getOne);
router.put('/toppings/:name', Pizza.topping.update);
router.delete('/toppings/:name', Pizza.topping.delete);

router.post('/sizes', Pizza.size.add);
router.get('/sizes', Pizza.size.getAll);
router.get('/sizes/:option', Pizza.size.getOne);
router.put('/sizes/:name', Pizza.size.update);
router.delete('/sizes/:name', Pizza.size.delete);

router.post('/pizzas', Pizza.add);
router.get('/pizzas', Pizza.getAll);
router.get('/pizzas/:id', Pizza.getOne);
router.put('/pizzas/:id', Pizza.update);
router.delete('/pizzas/:id', Pizza.delete);

module.exports = router;
// export { router }