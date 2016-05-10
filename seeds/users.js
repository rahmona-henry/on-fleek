var bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({fullName: 'Andrew Wadman', profilePicture: "https://s-media-cache-ak0.pinimg.com/236x/13/4a/78/134a78460defef0bc46ef4bd2174e7f0.jpg", passwordHash: bcrypt.hashSync('password', saltRounds), email: 'andrewwadman@gmail.com', styleRating: 1, connoisseurRating: 1, fbId: 1, igId: 1}),
    knex('users').insert({fullName: 'Sam Simmons', profilePicture: "https://s-media-cache-ak0.pinimg.com/236x/13/4a/78/134a78460defef0bc46ef4bd2174e7f0.jpg", passwordHash: bcrypt.hashSync('password', saltRounds), email: 'samsimmons@gmail.com', styleRating: 2, connoisseurRating: 2, fbId: 2, igId: 2}),
    knex('users').insert({fullName: 'Vicken Liu', profilePicture: "https://s-media-cache-ak0.pinimg.com/236x/13/4a/78/134a78460defef0bc46ef4bd2174e7f0.jpg", passwordHash: bcrypt.hashSync('password', saltRounds), email: 'vickenliu@gmail.com', styleRating: 3, connoisseurRating: 3, fbId: 3, igId: 3}),
    knex('users').insert({fullName: 'Tony Luisi' , passwordHash: bcrypt.hashSync('password', saltRounds), email: 'tluisi@gmail.com', styleRating: 3, connoisseurRating: 3, fbId: 10156915534565451, igId: 3})
  );
};
