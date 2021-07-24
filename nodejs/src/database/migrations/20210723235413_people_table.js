/** @param {import('knex').Knex} knex */
exports.up = function(knex) {
  return knex.schema.createTable('people', function (table) {
      table.increments('id');
      table.string('name');
  })
};

/** @param {import('knex').Knex} knex */
exports.down = function(knex) {
    return knex.schema.dropTable('people');
};
