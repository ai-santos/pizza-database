const db = require('./main')

const creditCard = {

  add: ( request, response, next ) => {
    const { name, number, expiration } = request.body
    db('credit_card').returning('*').insert({
                              name: name,
                              number: number,
                              expiration: expiration
                            })
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
    db('credit_card').select()
    .then( data => {
      response.status( 200 )
      .json({
              status: 'success',
              data: data,
              message: 'Retrieved.'
            })
    })
    .catch( error => next( error ))
  },

  getOne: ( request, response, next ) => {
    const { id } = request.params
    db('credit_card').select().where({ id: id })
    .then( data => {
      response.status( 200 )
      .json({
              status: 'success',
              data: data,
              message: 'Retrieved.'
            })
    })
    .catch( error => next( error ))
  },

  update: ( request, response, next ) => {
    const { id } = request.params
    const { new_name, new_number, new_expiration } = request.body
    db('credit_card').returning('*').where({ id: id }).update({
                                                                name: new_name,
                                                                number: new_number,
                                                                phone: new_phone
                                                              })
      .then( data => {
        response.status( 200 )
        .json({
                status: 'success',
                data: data,
                message: 'Updated B.'
              })
      })
      .catch( error => next( error ))
  },

  delete: ( request, response, next ) => {
    const { id } = request.params
    db('credit_card').where({ id: id }).del()
    .then( data => {
      response.status( 200 )
      .json({
              status: 'success',
              data: data,
              message: 'That shit got deleted yo.'
            })
    })
    .catch( error => next( error ))
  }
}

module.exports = creditCard
