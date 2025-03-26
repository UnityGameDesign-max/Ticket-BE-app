const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
module.exports = require('knex')(knexfile[environment]);