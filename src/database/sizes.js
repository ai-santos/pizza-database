// import db from './main'
const db = require('./main')

const Size = {

  add: ( request, response, next ) => {
    const { name, price } = request.body
    db('sizes').insert({ name: name, price: price  })
    .then( response.status( 200 ).json({ status: 'success', message: 'Added new Size.' }) )
    .catch( error => next( error ))
  },

  getAll: ( request, response, next ) => {
    db('sizes').select().orderBy( "price", "asc")
    .then( data => {
      response.status(200)
      .json({
              status: 'success',
              data: data,
              message: 'Retrieved all pizza sizes.'
            })
    })
    .catch( error => next( error))
  },

  getOne: ( request, response, next ) => {
    const { option } = request.params
    //( typeof option == 'string' ) ? db('sizes').select().where({ name: option }) : db('sizes').select().where({ price: price })
    if ( isNaN(option) ) {
      db('sizes').select().where({ name: option })
      .then( data => {
        response.status(200)
        .json({
                status: 'success',
                data:data,
                message: 'Retrived one pizza size by name.'
              })
      })
      .catch( error => next( error ))
    } else {
      const name = option.toUpperCase()
      console.log(name)
      db('sizes').select().where({ price: name })
      .then( data => {
        response.status(200)
        .json({
                status: 'success',
                data:data,
                message: 'Retrived one pizza size by price.'
              })
      })
      .catch( error => next( error ))
    }
 },

  update: ( request, response, next ) => {
    const { name, price } = request.params
    const { new_name, new_price } = request.body
    db('sizes').where({ name: name }).update({ name: new_name, price: new_price })
    .then( response.status(200)
            .json({
                    status: 'success',
                    message: 'Updated pizza size.'
                  }))
    .catch( error => next( error ))
  },

  delete: ( request, response, next ) => {
    const { name, price } = request.params
    db('sizes').where({ name:name }).del()
    .then( response.status(200)
              .json({
                      status: 'success',
                      message: 'Deleted pizza size.'
              }))
    .catch( error => next( error ))
  }
}

module.exports = Size
// export Size
