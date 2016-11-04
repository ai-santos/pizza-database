'use strict';

// import db from './main'
var db = require('./main');

var Size = {

  add: function add(request, response, next) {
    var _request$body = request.body,
        name = _request$body.name,
        price = _request$body.price;

    db('sizes').insert({ name: name, price: price }).then(response.status(200).json({ status: 'success', message: 'Added new Size.' })).catch(function (error) {
      return next(error);
    });
  },

  getAll: function getAll(request, response, next) {
    db('sizes').select().orderBy("price", "asc").then(function (data) {
      response.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved all pizza sizes.'
      });
    }).catch(function (error) {
      return next(error);
    });
  },

  getOne: function getOne(request, response, next) {
    var option = request.params.option;
    //( typeof option == 'string' ) ? db('sizes').select().where({ name: option }) : db('sizes').select().where({ price: price })

    if (isNaN(option)) {
      db('sizes').select().where({ name: option }).then(function (data) {
        response.status(200).json({
          status: 'success',
          data: data,
          message: 'Retrived one pizza size by name.'
        });
      }).catch(function (error) {
        return next(error);
      });
    } else {
      var name = option.toUpperCase();
      console.log(name);
      db('sizes').select().where({ price: name }).then(function (data) {
        response.status(200).json({
          status: 'success',
          data: data,
          message: 'Retrived one pizza size by price.'
        });
      }).catch(function (error) {
        return next(error);
      });
    }
  },

  update: function update(request, response, next) {
    var _request$params = request.params,
        name = _request$params.name,
        price = _request$params.price;
    var _request$body2 = request.body,
        new_name = _request$body2.new_name,
        new_price = _request$body2.new_price;

    db('sizes').where({ name: name }).update({ name: new_name, price: new_price }).then(response.status(200).json({
      status: 'success',
      message: 'Updated pizza size.'
    })).catch(function (error) {
      return next(error);
    });
  },

  delete: function _delete(request, response, next) {
    var _request$params2 = request.params,
        name = _request$params2.name,
        price = _request$params2.price;

    db('sizes').where({ name: name }).del().then(response.status(200).json({
      status: 'success',
      message: 'Deleted pizza size.'
    })).catch(function (error) {
      return next(error);
    });
  }
};

module.exports = Size;
// export Size