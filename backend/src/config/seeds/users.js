const bcrypt = require('bcrypt');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
  return knex('users').del() 
    .then(async function () {
    
      return knex('users').insert([
        { 
          id: 1, 
          name: 'John Doe', 
          email: 'johndoe@example.com', 
          password: await bcrypt.hash('password123', 10),
          created_at: knex.fn.now(), 
          updated_at: knex.fn.now() 
        },
        { 
          id: 2, 
          name: 'Sifiso James', 
          email: 'sifisojames@example.com', 
          password: await bcrypt.hash('password456', 10), 
          created_at: knex.fn.now(), 
          updated_at: knex.fn.now() 
        },
        { 
          id: 3, 
          name: 'Adam Eve', 
          email: 'adameve@example.com', 
          password: await bcrypt.hash('password789', 10), 
          created_at: knex.fn.now(), 
          updated_at: knex.fn.now() 
        }
      ]);
    });
};
