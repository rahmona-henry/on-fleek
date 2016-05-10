
// Require chai.js expect module for assertions
var chai = require('chai');
var expect = require('chai').expect;

// Application Server
var serverUri = '0.0.0.0:3000';

// Official selenium webdriver testing setup
var webdriver = require('selenium-webdriver');
var driver;
describe('basic test', function () {

  describe('title test', function() {

    before(function(){
        // Start of test use this
        driver = new webdriver.Builder().forBrowser('firefox').build()
        console.log("Selenium Webdriver Chrome Started");
    });

    after(function(){
        // End of test use this.
        driver.quit();
    });

    it('should be on correct page', function (done) {
        this.timeout(20000);
        driver.get('http://localhost:3000');
        driver.getTitle()
          .then(function(title) {
            expect(title).to.equal('ON FLEEK');

            console.log("Selenium Webdriver Chrome Shutdown");
          })
          .then(function() {
            // driver.wait(5000);
            driver.findElement(webdriver.By.className('settings-btn')).click()
            expect(driver.findElement(webdriver.By.className('grid'))).to.exist
          })
          .then(function() {
            done();
          })
    });
  });
});




// var webdriver = require('selenium-webdriver');
// var By = require('selenium-webdriver').By;
// var until = require('selenium-webdriver').until;
// var chai = require('chai')
// var expect = require('chai').expect;
//
//
//
// describe('Selenium', function() {
//
//   before(function() {
//     var driver = new webdriver.Builder().forBrowser('firefox').build();
//
//     driver.manage().window().maximize();
//
//     driver.manage().deleteAllCookies();
//
//     console.log('Firefox test started')
//   })
//
//   it('should be on the right page', function() {
//   driver.get('http://on-fleek.herokuapp.com')
//   driver.getTitle().then(function(title) {
//     expect(title).to.equal('ON FLEEK')
//     })
//   })
//
// after(function(){
//   driver.quit();
// })
//
//
// })
