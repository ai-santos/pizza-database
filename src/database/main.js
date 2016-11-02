const DATABASE_NAME = 'pizza-database'
const connection_string = `postgres://${process.env.USER}@localhost:5432/${DATABASE_NAME}`
const knex = require( 'knex' )({
                                client: 'pg',
                                connection: connection_string,
                                searchPath: 'knex,public'
                              })


const Pizza = {

  getAll: ( request, response, next ) => {
    knex.select().from('pizzas')
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

  add: ( request, response, next ) => {
    const { size, topping_1, topping_2 } = request.body
    knex('pizzas').insert({
                          size: size,
                          topping_1: topping_1,
                          topping_2: topping_2
                        })
    .then( () => {
      response.status(200)
      .json({
              status: 'success',
              message: 'Added pizza to the database.'
            })
    })
    .catch( error => next( error ))
  }

}

module.exports = Pizza
