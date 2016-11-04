// import db from './main'
const db = require('./main')

const Topping = {

  add: ( request, response, next ) => {
    const { name } = request.body
    db('toppings').insert({ name: name })
    .then( response.status(200)
      .json({ status: 'success',
              message: 'Added a topping.'
            }))
    .catch( error => next( error ) )

  },

  getAll: ( request, response, next ) => {
    db('toppings').select()
    .then( data => {
      response.status(200)
      .json({
              status: 'success',
              data: data,
              message: 'Retrieved all toppings.'
            })
    })
    .catch( error => next( error ))
  },

  getOne: ( request, response, next ) => {
    const { name } = request.params
    db('toppings').select().where({ name: name })
    .then( data => {
      response.status(200)
      .json({
              status: 'success',
              data: data,
              message: 'Retrieved one topping.'
            })
    })
    .catch( error => next( error ) )
  },

  update: ( request, response, next ) => {
    const { name } = request.params
    const { new_name } = request.body
    db('toppings').where({ name: name }).update({ name: new_name })
    .then( response.status(200)
            .json({
                    status: 'success',
                    message: 'Updated topping.'
                  }))
    .catch( error => next( error ))
  },

  delete: ( request, response, next ) => {
    const { name } = request.params
    db('toppings').where({ name: name }).del()
    .then( response.status(200).json({ status: 'success', message: 'Deleted topping entry.' }))
    //.catch( error => next( error ))
  }

}

module.exports = Topping
// export {Topping}
