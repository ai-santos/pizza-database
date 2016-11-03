const DATABASE_NAME = 'pizza-database'
const connection_string = `postgres://${process.env.USER}@localhost:5432/${DATABASE_NAME}`
//import
const db = require( 'knex' )({
                                client: 'pg',
                                connection: connection_string,
                                searchPath: 'knex,public'
})

module.exports = db
// export db
