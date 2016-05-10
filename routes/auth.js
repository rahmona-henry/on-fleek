var express = require('express');
var router = express.Router();
var path = require('path')
var passport = require('passport')

//facebook authentication
router.get('/facebook',
  passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    req.session.userId = req.user.dbid
    res.redirect('/')
  });


//instagram authentication
router.get('/instagram',
  passport.authenticate('instagram'));

router.get('/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    req.session.userId = req.user.dbid
    res.redirect('/');
  });


  router.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect('/')
  });
module.exports = router;
