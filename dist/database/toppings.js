'use strict';

// import db from './main'
var db = require('./main');

var Topping = {

  add: function add(request, response, next) {
    var name = request.body.name;

    db('toppings').insert({ name: name }).then(response.status(200).json({ status: 'success',
      message: 'Added a topping.'
    })).catch(function (error) {
      return next(error);
    });
  },

  getAll: function getAll(request, response, next) {
    db('toppings').select().then(function (data) {
      response.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved all toppings.'
      });
    }).catch(function (error) {
      return next(error);
    });
  },

  getOne: function getOne(request, response, next) {
    var name = request.params.name;

    db('toppings').select().where({ name: name }).then(function (data) {
      response.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved one topping.'
      });
    }).catch(function (error) {
      return next(error);
    });
  },

  update: function update(request, response, next) {
    var name = request.params.name;
    var new_name = request.body.new_name;

    db('toppings').where({ name: name }).update({ name: new_name }).then(response.status(200).json({
      status: 'success',
      message: 'Updated topping.'
    })).catch(function (error) {
      return next(error);
    });
  },

  delete: function _delete(request, response, next) {
    var name = request.params.name;

    db('toppings').where({ name: name }).del().then(response.status(200).json({ status: 'success', message: 'Deleted topping entry.' }));
    //.catch( error => next( error ))
  }

};

module.exports = Topping;
// export {Topping}