
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cities', function(table) {
    table.increments();
    table.string('name');
    table.integer('count').defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cities');
};

//id,countryCode,languageScript,name,latitude,longitude
