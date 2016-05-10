
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('photos').del(),

    // Inserts seed entries
    knex('photos').insert({userId: 1, countryId: 233, cityId: 1, caption: 'I am riding a horse', rating: 100, link: "https://s-media-cache-ak0.pinimg.com/236x/13/4a/78/134a78460defef0bc46ef4bd2174e7f0.jpg", categoryId: 7, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 2, countryId: 171, cityId: 2, caption: 'Look an albino kiwi!', rating: -56, link: "https://s-media-cache-ak0.pinimg.com/236x/23/34/c1/2334c175f848b17e62cda6d8d4c8ad8b.jpg", categoryId: 1, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 3, countryId: 48, cityId: 3, caption: 'Just read the docs', rating: 45, link: "http://i.dailymail.co.uk/i/pix/2013/05/09/article-0-19B357D8000005DC-348_634x607.jpg", categoryId: 8, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 4, countryId: 171, cityId: 4, caption: 'Just read the docs', rating: 45, link: "http://www.skyline.co.nz/content/images/773/640x480normal/MPIX_6411_57.JPG", categoryId: 8, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"})

  );
};
