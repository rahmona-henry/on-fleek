require('dotenv').config();
var path = require('path');
var db = require('./database/db');
//express
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')

//knex
var Knex = require('knex');
var knexConfig = require(__dirname + '/knexfile');
var knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
var db = require('./database/db')

//passport
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var InstagramStrategy = require('passport-instagram');

//routes
var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var test = require('./routes/test');
var app = express();
var db = require('./database/db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session initialisation
app.use(session({
  secret: 'This is a secret!',
  saveUninitialized: true,
  resave: true,
  db: knex,
  cookie: {maxAge: 24*60*60*1000}
}))

//Passport initialisation
app.use(passport.initialize());
app.use(passport.session());

// Facebook strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.DOMAIN + "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    var user = profile
    var checkUser = {}
    checkUser.fullName = user.displayName
    checkUser.email = user.emails[0].value
    checkUser.fbId = user.id
    db.findOrCreate(checkUser, function(returnedUser){
      user.dbid = returnedUser.id
      return cb(null, user)
    })
  }
));

// Instagram strategy
passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.DOMAIN + "/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    var user = profile
    var checkUser = {}
    checkUser.fullName = user.displayName
    checkUser.igId = user.id
    db.findOrCreate(checkUser, function(returnedUser){
      user.dbid = returnedUser.id
      return cb(null, user)
    })
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//routing
app.use('/', routes);
app.use('/users', users);
app.use('/auth', auth)
app.use('/test', test)


app.use(function(req, res) {
    res.redirect('/')
});
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, './public', 'index.html'))
})



module.exports = app;
