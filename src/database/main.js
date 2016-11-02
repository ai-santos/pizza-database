const DATABASE_NAME = 'pizza-database'
const connection_string = `postgres://${process.env.USER}@localhost:5432/${DATABASE_NAME}`
const knex = require( 'knex' )({
                                client: 'pg',
                                connection: connection_string,
                                searchPath: 'knex,public'
                              })

const Topping = {

  getAll: ( request, response, next ) => {
    knex.select().from('toppings')
    .then( data => {
      response.status( 200 )
      .json({
              status: 'success',
              data: data,
              message: 'retrieved toppings.'
            })
    } )
  }
}

module.exports = Topping
