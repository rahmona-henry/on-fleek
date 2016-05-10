var request = require('superagent');
var user = request.agent();
var expect = require('chai').expect;
var db = require('../../database/db');
const exec = require('child_process').execSync;
//tests that need to be written
//feed
  //get feed
    //if not signed in gets all the photos the first 50
    //if signed in doesn't get photos voted on or photos


exec('knex seed:run')

describe('feed', function() {
  describe('get feed', function(){
    beforeEach(function(done) {
      user
        .post('http://localhost:3000/users/login')
        .send({ email: 't.luisi@gmail.com', password: 'password' })
        .end(function(err, res){
          done()
        })
    })
    it('should get all the feeds', function(done) {
      user
        .get('http://localhost:3000/getFeed')
        .end(function(err, res){
          var photos = JSON.parse(res.text)
          expect(photos.length).to.equal(4)
          done()
        })

    })
  })
})

//locations
//all locations
//post locations /get feed
//get categories
describe('locations', function() {
  describe('get all locations', function(){
    beforeEach(function(done) {
      user
        .post('http://localhost:3000/users/login')
        .send({ email: 't.luisi@gmail.com', password: 'password' })
        .end(function(err, res){
          done()
        })
    })
    it('should get all the locations', function(done) {
      user
        .get('http://localhost:3000/locations')
        .end(function(err, res){
          var locations = JSON.parse(res.text)
          expect(locations).to.be.ok
          expect(locations.cities).to.be.ok
          expect(locations.countries).to.be.ok
          done()
        })

    })
  })
})


//user
  //post a new user
  //sign in
  //upload image
describe('users', function() {
  describe('get photos', function(){
    beforeEach(function(done) {
      user
        .post('http://localhost:3000/users/login')
        .send({ email: 't.luisi@gmail.com', password: 'password' })
        .end(function(err, res){
          done()
        })
    })
    it('should get photos of a user', function(done) {
      user
        .get('http://localhost:3000/users/photos')
        .end(function(err, res){
          var photos = JSON.parse(res.text)
          expect(photos.length).to.equal(1)
          photos.map(function(photo){
            expect(photo.userId).to.equal(4)
          })
          done()
        })

    })
  })
  describe('votes', function(){
    beforeEach(function(done) {
      user
        .post('http://localhost:3000/users/login')
        .send({ email: 't.luisi@gmail.com', password: 'password' })
        .end(function(err, res){
          done()
        })
    })
    it('should cast a vote', function(done) {
      user
        .post('http://localhost:3000/users/vote')
        .send({ vote: 1, photoId: 1 })
        .end(function(err, res){
          var message = JSON.parse(res.text)
          expect(message.message).to.be.ok
          done()
        })
    })
    it('should not cast a vote that has been done before', function(done) {
      user
        .post('http://localhost:3000/users/vote')
        .send({ vote: 1, photoId: 1 })
        .end(function(err, res){
          var message = JSON.parse(res.text)
          expect(message.errno).to.be.ok
          done()
        })
    })
  })
})
