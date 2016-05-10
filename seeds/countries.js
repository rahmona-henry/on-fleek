var seeder = require('knex-csv-seeder');

exports.seed = seeder.seeder.seed({
  table: 'countries',
  file: __dirname + '/../datasets/countries.csv',
  // recordsPerQuery: 100,
  // encoding: 'utf8' default encoding
  // parser: {
  //   delimiter: ',',
  //   quote: '"',
  //   escape: '\\'
  // }
});
