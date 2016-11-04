const db = require('./main')

const Drink = {

  add: ( request, response, next ) => {
    const { name, price } = request.body
    db('drinks').returning('*').insert({ name: name, price: price })
    .then( data => {
      response.status( 200 )
      .json({
              status: 'success',
              data: data,
              message: 'Inserted.'
            })
    })
    .catch( error => next( error ))

  },

  getAll: ( request, response, next ) => {
      db('drinks').select()
      .then( data => {
        response.status( 200 )
        .json({
                status: 'success',
                data: data,
                message: 'Retrieved all drinks.'
              })
      })
      .catch( error => next( error ))
  },

  getOne: ( request, response, next ) => {
    const { name } = request.params
    db('drinks').select().where({ name: name })
    .then( data => {
        response.status( 200 )
        .json({
                status: 'success',
                data: data,
                message: 'Retrieved specified drink.'
              })
    })
    .catch()

  },
  
  update: ( request, response, next ) => {
    const { name } = request.params
    const { new_name, new_price } = request.body
    db('drinks').returning('*').where({ name: name }).update({ name: new_name, price: new_price })
    .then( data => {
      response.status( 200 )
      .json({
              status: 'success',
              data: data,
              message: 'Updated drink entry.'
            })
    })
    .catch( error => next( error ))
  },

  delete: ( request, response, next ) => {
    const { name } = request.params
    db('drinks').where({ name: name }).del()
    .then( response.status( 200 )
    .json({
            status: 'success',
            message: 'Deleted drink from '
          }))
    .catch()
  },

}

module.exports = Drink
