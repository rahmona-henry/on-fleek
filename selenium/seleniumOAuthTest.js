var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build()


driver.get('http://localhost:3000')


driver.findElement({className: 'settings-btn'}).click()
  .then(function() {
    driver.sleep(1000)
    driver.findElement({xpath: '//*[@id="app"]/div/nav/a[3]'}).click()
  }).then(function() {
    driver.sleep(500)
    driver.findElement({xpath: '//*[@id="app"]/div/div/div/div[2]/div/a[1]/div/img'}).click()
    driver.sleep(1500)
  }).then(function() {
    driver.findElement({id: 'email'}).sendKeys('wjuwevo_martinazziescu_1462786160@tfbnw.net')
    driver.findElement({id: 'pass'}).sendKeys('onfleekpassword')
    driver.findElement({id: 'loginbutton'}).click()
  }).then(function() {
    driver.findElement({xpath: '//*[@id="app"]/div/div/div/div[2]/div[1]/a/img'}).click()
    driver.sleep(500)
  }).then(function() {
    driver.findElement({xpath: '//*[@id="app"]/div/div/div/div[2]/button[2]'}).click()
    driver.sleep(500)
    driver.findElement({xpath: '//*[@id="app"]/div/div/div/div[2]/button[1]'}).click()
    driver.sleep(500)
    driver.findElement({xpath: '//*[@id="app"]/div/div/div/div[2]/button[3]'}).click()
  })
