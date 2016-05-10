
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('countries', function(table) {
    table.increments();
    table.string('code');
    table.string('name');
    table.integer('count').defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('countries');
};
