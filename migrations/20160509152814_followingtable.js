exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('following', function(table) {
    table.increments();
    table.integer('userId');
    table.integer('following')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('following');
};
