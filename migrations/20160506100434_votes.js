exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('votes', function(table) {
    table.increments();
    table.integer('vote').notNullable();
    table.integer('userId').notNullable();
    table.integer('photoId').notNullable();
    table.timestamps();
    table.unique(['photoId', 'userId'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('votes');
};
