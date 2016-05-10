var express = require('express');
var router = express.Router();
var db = require('../database/db');

//this route is for testing api to database requests and seeing data in the database

router.get('/getUsers', function(req, res, next) {
  db.getUsers().then(function (result) {
    res.send(result)
  })
})

router.get('/sessionID', function(req,res,next){
  res.send(req.sessionID)
})

router.get('/getVotes', function(req,res,next){
  db.getVotes().then(function(result){

    res.send(result)
  })
})

router.get('/test', function(req,res,next){
  res.send('test')
})

router.get('/feedByUser', function(req,res,next){
  req.session.userId = 1
  db.getPhotosAndVotes()
    .then(function(photos){
      photos = photos.filter(function(photo){
        return photo.userId !== req.session.userId
      })
      res.send(photos)
    })
})
module.exports = router;
