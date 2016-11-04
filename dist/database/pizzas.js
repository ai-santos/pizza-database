'use strict';

var db = require('./main');

var Pizza = {

  topping: require('./toppings'),
  size: require('./sizes'),

  add: function add(request, response, next) {
    var _request$body = request.body,
        size = _request$body.size,
        topping_1 = _request$body.topping_1,
        topping_2 = _request$body.topping_2;

    db('pizzas').returning('id').insert({ size: size, topping_1: topping_1, topping_2: topping_2 }).then(function (data) {
      response.status(200).json({
        status: 'success',
        id: data,
        message: 'Added a pizza to the database.'
      });
    }).catch(function (error) {
      return next(error);
    });
  },

  getAll: function getAll(request, response, next) {
    db('pizzas').select().then(function (data) {
      response.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved all pizzas.'
      });
    }).catch(function (error) {
      return next(error);
    });
  },

  getOne: function getOne(request, response, next) {
    var id = request.params.id;

    db('pizzas').select().where({ id: id });
  },

  update: function update(request, response, next) {
    var id = request.params.id;
    var _request$body2 = request.body,
        new_size = _request$body2.new_size,
        new_topping_1 = _request$body2.new_topping_1,
        new_topping_2 = _request$body2.new_topping_2;

    db('pizzas').where({ id: id }).update({ size: new_size,
      topping_1: new_topping_1,
      topping_2: new_topping_2
    }).then(response.status(200).json({
      status: 'success',
      message: 'Updated pizza entry.'
    })).catch(function (error) {
      return next(error);
    });
  },

  delete: function _delete(request, response, next) {
    var id = request.params.id;

    db('pizzas').where({ id: id }).del().then(response.status(200).json({
      status: 'success',
      message: 'Deleted pizza from database.'
    })).catch(function (error) {
      return next(error);
    });
  }

};

module.exports = Pizza;