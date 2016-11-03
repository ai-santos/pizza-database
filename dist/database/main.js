'use strict';

var DATABASE_NAME = 'pizza-database';
var connection_string = 'postgres://' + process.env.USER + '@localhost:5432/' + DATABASE_NAME;
//import
var db = require('knex')({
                                client: 'pg',
                                connection: connection_string,
                                searchPath: 'knex,public'
});

module.exports = db;
// export db