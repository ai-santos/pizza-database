const db = require( './main' )

const Pizza = {

  topping: require('./toppings'),
  size: require('./sizes'),

  add: ( request, response, next ) => {
    const { size, topping_1, topping_2 } = request.body
    db('pizzas').returning('id').insert({ size: size, topping_1: topping_1, topping_2: topping_2 })
    .then( data => {
        response.status( 200 )
        .json({
                status: 'success',
                id: data,
                message: 'Added a pizza to the database.'
              })
    })
    .catch( error => next( error ))
  },

  getAll: ( request, response, next ) => {
    db('pizzas').select()
    .then( data => {
        response.status(200)
        .json({
                status: 'success',
                data: data,
                message: 'Retrieved all pizzas.'
              })
    })
    .catch( error => next( error ))
  },

  getOne: ( request, response, next ) => {
    const { id } = request.params
    db('pizzas').select().where({ id: id })
    .then( data => {
      response.status(200)
      .json({
              status: 'success',
              data: data,
              message: 'Retrieved specfied pizza by ID.'
            })
    })
    .catch( error => next( error))
  },

  update: ( request, response, next ) => {
    const { id } = request.params
    const { new_size, new_topping_1, new_topping_2 } = request.body
    db('pizzas').where({ id: id }).update({ size: new_size,
                                            topping_1: new_topping_1,
                                            topping_2: new_topping_2
                                          })
      .then( response.status(200)
        .json({
                status: 'success',
                message: 'Updated pizza entry.'
              }))
      .catch( error => next( error ))
  },

  delete: ( request, response, next ) => {
    const { id } = request.params
    db('pizzas').where({ id: id}).del()
    .then( response.status(200)
      .json({
              status: 'success',
              message: 'Deleted pizza from database.'
            }))
    .catch( error => next( error ))
  }

}

module.exports = Pizza
