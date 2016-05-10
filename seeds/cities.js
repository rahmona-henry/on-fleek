
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cities').del(),

    // Inserts seed entries
    knex('cities').insert({name: 'Austin', count: 9}),
    knex('cities').insert({name: 'Wellington', count: 8}),
    knex('cities').insert({name: 'Auckland', count: 7}),
    knex('cities').insert({name: 'San Francisco', count: 6}),
    knex('cities').insert({name: 'Los Angeles', count: 5}),
    knex('cities').insert({name: 'Tokyo', count: 4}),
    knex('cities').insert({name: 'Christchurch', count: 3}),
    knex('cities').insert({name: 'Melbourne', count: 0})
  );
};
