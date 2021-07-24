const dbConfig = require('../../knexfile')

const knex = require('knex')({
    client: 'mysql',
    connection: dbConfig.connection
  });

module.exports = knex;