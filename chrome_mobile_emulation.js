/**
 * @fileoverview This is an example of emulating a mobile device using the
 * ChromeDriver.
 */

'use strict'

const { Builder, By, Key, until } = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/chrome')

;(async function () {
  let driver
  try {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(
        new Options().setMobileEmulation({ deviceName: 'emulator-5554' })
      )
      .build()
    await driver.get('http://www.google.com')
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  } finally {
    ;(await driver) && driver.quit()
  }
})().then(
  (_) => console.log('SUCCESS'),
  (err) => console.error('ERROR: ' + err)
)
