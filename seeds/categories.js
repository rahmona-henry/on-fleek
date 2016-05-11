
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert({id: 1, category: 'street'}),
    knex('categories').insert({id: 2, category: 'high fashion'}),
    knex('categories').insert({id: 3, category: 'hipster'}),
    knex('categories').insert({id: 4, category: 'posh'}),
    knex('categories').insert({id: 5, category: 'sportswear'}),
    knex('categories').insert({id: 6, category: 'outdoors'}),
    knex('categories').insert({id: 7, category: 'business'}),
    knex('categories').insert({id: 8, category: 'children'})
  );
};
