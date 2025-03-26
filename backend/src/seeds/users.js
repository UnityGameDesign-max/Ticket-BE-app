const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex.queryBuilder().insert([
          { 
            id: uuidv4(), 
            name: 'John Doe', 
            email: 'johndoe@example.com', 
            password: bcrypt.hashSync('password123!', 10) 
          },
         
        ]).into('users');
      });
  };
  