var webdriver = require('selenium-webdriver');
var Chance = require('chance');
var chance = new Chance();

var driver = new webdriver.Builder().forBrowser('firefox').build()

driver.get('http://localhost:3000')

driver.findElement({className: 'settings-btn'}).click()
  .then(function() {
    driver.sleep(1000)
    driver.findElement({xpath: '//*[@id="app"]/div/nav/a[3]'}).click()
  }).then(function() {
    driver.findElement({xpath: '//*[@id="app"]/div/div/div/div[3]/button'}).click()
  }).then(function() {
    signUp();
  }).then(function(){
    checkButtons()
  }).then(function(){
    uploadPhoto();
    driver.sleep(5000)
  })




var signUp = function () {
  driver.findElement({name: 'Fullname'}).sendKeys('Selenium Tester')
  driver.findElement({name: 'emal'}).sendKeys(chance.email())
  driver.findElement({name: 'password'}).sendKeys('password')
  driver.sleep(3000)
  driver.findElement({xpath: '//*[@id="app"]/div/div/div/form/button'}).click()
  driver.sleep(2000)
}

var checkButtons = function() {
  driver.findElement({xpath: '//*[@id="app"]/div/nav/a[2]'}).click()
  driver.sleep(1000)
  driver.findElement({xpath: '//*[@id="app"]/div/nav/a[1]'}).click()
  driver.sleep(1000)
  driver.findElement({xpath: '//*[@id="app"]/div/nav/a[3]'}).click()
}

var uploadPhoto = function() {
  driver.findElement({name: 'file'}).sendKeys('/Users/apprentice/Desktop/007_A21-195x300.jpg')
  driver.sleep(4000)
  for(i=1; i<9; i++) {
    driver.findElement({xpath: `//*[@id="uploadpage"]/div[2]/select/option[${i}]`}).click()
    driver.sleep(500)
  }
  driver.findElement({id: 'location'}).sendKeys('London')
  driver.sleep(1000)
  driver.findElement({id: 'submitUpload'}).click()
}
