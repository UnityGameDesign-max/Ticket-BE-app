/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
  return knex('tickets').del() 
    .then(function () {
      return knex('tickets').insert([
        { ticket_number: 'TICKET001', ticket_description: 'Login issue', user_id: 1, created_date: knex.fn.now(), updated_date: knex.fn.now() },
        { ticket_number: 'TICKET002', ticket_description: 'Dashboard error', user_id: 2, created_date: knex.fn.now(), updated_date: knex.fn.now() },
        { ticket_number: 'TICKET003', ticket_description: 'Payment page bug', user_id: 3, created_date: knex.fn.now(), updated_date: knex.fn.now() }
      ]);
    });
};
