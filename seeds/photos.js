
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('photos').del(),

    // Inserts seed entries
    knex('photos').insert({userId: 1, countryId: 233, cityId: 1, caption: 'I am riding a horse', rating: 100, link: "https://s-media-cache-ak0.pinimg.com/236x/13/4a/78/134a78460defef0bc46ef4bd2174e7f0.jpg", categoryId: 7, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 2, countryId: 171, cityId: 2, caption: 'Look an albino kiwi!', rating: -56, link: "https://s-media-cache-ak0.pinimg.com/236x/23/34/c1/2334c175f848b17e62cda6d8d4c8ad8b.jpg", categoryId: 1, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 3, countryId: 48, cityId: 3, caption: 'Just read the docs', rating: 45, link: "https://parisiangentleman.fr/wp-content/uploads/2014/05/Mao_Zedong_pr%C3%A9sident.jpg", categoryId: 8, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 3, countryId: 48, cityId: 3, caption: 'I am cheeky', rating: 97, link: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg", categoryId: 5, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 4, countryId: 171, cityId: 4, caption: 'Im cool', rating: 45, link: "https://s-media-cache-ak0.pinimg.com/736x/6a/f7/36/6af736428d0934c38636953a94988f25.jpg", categoryId: 8, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 4, countryId: 171, cityId: 4, caption: 'Look how buff I am', rating: 45, link: "http://whatshaute.com/wp-content/uploads/2013/11/Dwayne-The-Rock-Johnson-Authentic-Apparel-Group.jpg", categoryId: 8, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 4, countryId: 171, cityId: 4, caption: 'Coming to steal your girl', rating: 100, link: "https://brobible.files.wordpress.com/2014/07/the-rock.png", categoryId: 1, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 5, countryId: 171, cityId: 4, caption: 'Im Mix but look like a Linus', rating: 76, link: "http://b-i.forbesimg.com/eliseackerman/files/2013/07/300px-Linus_Torvalds_flipped4.jpg", categoryId: 7, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 5, countryId: 171, cityId: 4, caption: 'Im Mix also', rating: 77, link: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Linus_Torvalds_talking.jpeg", categoryId: 7, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 2, countryId: 171, cityId: 4, caption: 'Im Sam', rating: 79, link: "https://static.pexels.com/photos/6980/summer-cute-hipster-beauty.jpg", categoryId: 1, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 2, countryId: 171, cityId: 4, caption: 'Im Sam too', rating: 71, link: "http://media2.popsugar-assets.com/files/2014/04/14/605/n/1922564/99c1a707a532838a_484550455.xxxlarge_2x/i/Kate-Middleton-New-Zealand.jpg", categoryId: 4, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"}),
    knex('photos').insert({userId: 1, countryId: 233, cityId: 1, caption: 'I am a cowboy', rating: 100, link: "http://static1.1.sqspcdn.com/static/f/1051961/22134849/1362781793213/clint.JPG?token=tefJhG45WDUn2v1tHF17fUl0nEc%3D", categoryId: 6, created_at: "1999-01-08 04:05:06", updated_at: "1999-01-08 04:05:06"})
  );
};
