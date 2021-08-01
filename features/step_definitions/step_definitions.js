// Cucumber and chai have been loaded
const {until, By} = require("selenium-webdriver");
const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert');
const expect = require("chai/chai").expect;

///// Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}', function (int) {
    this.setTo(int);
});

When('I increment the variable by {int}', function (int) {
    this.incrementBy(int);
});

Then('the variable should contain {int}', function (int) {
    expect(this.variable).to.eql(int);
});

Given('ఏమిటంటే వేరియబులో {int} ని ఉంచాము', function (int) {
    this.setTo(int);
});

When('నేను అవేరియేబుల్ కి {int} ని కలుపుతాను', function (int) {
    this.incrementBy(int);
});

Then('అవేరియబుల్ ఈ {int} ని కలిగి ఉండాలి', function (int) {
    expect(this.variable).to.eql(int);
});

// Given(/^a variable set to |ఏమిటంటే వేరియబుల్ లో "(d+)"$/, function (num)  {
//     console.log(">>>>>"+num);
//     this.setTo(num);
// });

When('I call a step which is a generator with return value {string}', function* (string) {
    this.context = yield Promise.resolve(string);
});

Then('I can see the yielded {string} value in the context', function (string) {
    assert.equal(this.context, string);
    expect(this.context).to.eql(string);
});

Given('I have navigated to {string}', async function (string) {
    this.driver.get(string);
    await this.driver.sleep(5000);
    // await new Promise(resolve => setTimeout(resolve, 5000));
});

Then('I see webpage title as {string}', function (webPageTitle) {
    this.driver.getTitle()
        .then((title) => {
            assert.equal(webPageTitle, title)
            this.setToTitle(title);
        });
});

Then('I see current URL as {string}', function (currentURL) {
    // this.driver.wait(until.elementLocated(By.xpath('//*[contains(text(),"2. The Database")]')));
    const element = this.driver.findElement(By.xpath('//*[contains(text(),"2. The Database")]'));
    return element.click()
        .then((resolve) => {
            resolve("resolved");
        })
        .catch((message) => {
            console.log(message);
        })
});

When('I clicked the {string} link', function (link) {
    return this.driver.sleep(3000)
        .then(() => {
            return this.driver.findElement(By.xpath('//*[contains(text(),"' + link + '")]'))
                .click()
                .then(() => {
                    return this.driver.getCurrentUrl()
                        .then((url) => {
                            if (link == "4. Login") {
                                expect("http://thedemosite.co.uk/login.php").to.eql(url);
                            } else {
                                expect("http://thedemosite.co.uk/addauser.php").to.eql(url);
                            }
                        })
                });
        })
});

this.submitDetails = function () {
    return this.driver.findElement(By.name('username')).sendKeys('test')
        .then(() => {
            return this.driver.findElement(By.name('password')).sendKeys('test')
                .then(() => {
                    return this.driver.findElement(By.name('FormsButton2')).click()
                        .then(() => {
                            return;
                        })
                })
        });
};

When('I register user details', this.submitDetails);

When('I login to site', this.submitDetails);

Then('I should see {string} massage on screen', function (message) {
    return this.driver.findElement(By.xpath('//b[contains(text(),"' + message + '")]')).getText()
        .then((text) => {
            return expect(message).to.equal(text);
        })
});



