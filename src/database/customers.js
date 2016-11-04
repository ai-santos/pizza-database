const db = require('./main')

const Customer = {

  creditCard: require('./credit-cards'),

  add: ( request, response, next ) => {
    const { name, address, phone } = request.body
    db('customer').returning('*').insert({
                              name: name,
                              address: address,
                              phone: phone
                            })
      .then( data => {
        response.status( 200 )
        .json({
                status: 'Mas Exitosas!',
                data: data,
                message: 'Inserted customer.'
              })
      })
      .catch( error => next( error ))
  },

  getAll: ( request, response, next ) => {
    db('customer').select()
    .then( data => {
      response.status( 200 )
      .json({
              status: 'Mas Exitosas!',
              data: data,
              message: 'Recuperado todos los clientes.'
            })
    })
    .catch( error => next( error ))

  },

  getOne: ( request, response, next ) => {
    const { id } = request.params
    db('customer').select().where({ id: id })
    .then( data => {
      response.status( 200 )
      .json({
              status: 'Erfolg!',
              data: data,
              message: 'Abgerufen einen Kunden'
            })
    })
    .catch( error => next( error ))
  },

  update: ( request, response, next ) => {
    const { id } = request.params
    const { new_name, new_address, new_phone } = request.body
    db('customer').returning('*').where({ id: id }).update({ name: new_name, address: new_address, phone: new_phone })
    .then( data => {
      response.status( 200 )
      .json({
              status: 'Mas Exitosas!',
              data: data,
              message: 'Updated customer.'
            })
    })
    .catch( error => next( error ))
  },
  delete: ( request, response, next ) => {
    const{ id } = request.params
    db('customer').where({ id: id }).del()
    .then( data => {
      response.status( 200 )
      .json({
              status: 'Mafanikio!',
              message: 'Ilifutwa moja kwa wateja'
            })
    })
    .catch( error => next( error ))

  }

}

module.exports = Customer
