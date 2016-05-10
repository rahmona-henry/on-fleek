exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('categories', function(table) {
    table.increments();
    table.string('category');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('categories');
};
