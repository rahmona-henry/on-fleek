
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert({category: 'street'}),
    knex('categories').insert({category: 'high fashion'}),
    knex('categories').insert({category: 'hipster'}),
    knex('categories').insert({category: 'posh'}),
    knex('categories').insert({category: 'sportswear'}),
    knex('categories').insert({category: 'outdoors'}),
    knex('categories').insert({category: 'business'}),
    knex('categories').insert({category: 'children'})
  );
};
