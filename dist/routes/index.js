'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Topping from '../ian-queries'

var Topping = require('../ian-queries');

//const { Topping } = require('../ian-queries')


var router = _express2.default.Router();

/*Static files*/
router.get('/', function (request, response, next) {
  response.render('index');
});

router.get('/toppings', Topping.getAll);

// router.get('/toppings', ( request, response, next ) =>{
//   response.send("yo")
// })


module.exports = router;