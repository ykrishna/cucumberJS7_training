// process.env.PATH = '/Users/krishnayalavarthi/Desktop/drivers/'
const { Builder, By, Key, until } = require('selenium-webdriver')

let driver = new Builder().usingServer('http://localhost:4444/wd/hub').forBrowser('chrome').build();

driver.get('http://www.google.com/ncr')
    .then((_) => driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then((_) => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then((_) => driver.quit()).catch(console.log(">>>>>>Krishna>>>>>>"));