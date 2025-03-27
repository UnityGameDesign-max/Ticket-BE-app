/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tickets', (table) => {
        table.increments('id').primary();
        table.string('ticket_number').notNullable().unique(); 
        table.text('ticket_description').notNullable(); 
        table.timestamp('created_date').defaultTo(knex.fn.now()); 
        table.timestamp('updated_date').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('deleted_date').nullable();
        table.integer('user_id').unsigned().references('id').inTable('users');
        
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tickets')
};
