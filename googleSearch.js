// alternative path setup in node if path is not set through env variables
process.env.PATH = '/Users/krishnayalavarthi/Desktop/drivers/'
const {Builder, By, Key, until} = require('selenium-webdriver');

(function () {
    let driver;

    /* if you want to use your own down loaded drivers, you need specify the driver path and
    if you want to use your own server hub , start the selenium server or webdriver-manager start and add
    .usingServer('http://localhost:4444/wd/hub') to builder
    driver = new Builder().forBrowser('chrome').build();
     or
    driver = new Builder().usingServer('http://localhost:4444/wd/hub').forBrowser('chrome').build();*/

    driver = new Builder().forBrowser('chrome').build();
    driver.get('http://www.google.com')
        .then(() => driver.findElement(By.xpath('//div[contains(text(),"I agree")]')))
        .then((element) => element.click())
        .then((_) => driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
        .then((_) => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
        .then((_) => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>")
            return driver.getCapabilities()
            console.log(">>>>>>>>>>>>>>>>>>>>>>")
        })
        .then((_) => {
            console.log(_)
            driver.quit()
        })
        .catch(
            (error) => console.log(">>>>>>something gone wrong>>>>>>" + error)
        )
})();