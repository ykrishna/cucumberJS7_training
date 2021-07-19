// Cucumber and chai have been loaded
// World is global object which has everything from start to end, it only die when cucumber
// execution is completed and come back to node
const {Given, When, Then, setWorldConstructor} = require("@cucumber/cucumber");
const expect = require("chai/chai").expect;
/* above declaration and below declaration is same
import {Given,When,Then,setWorldConstructor} from "@cucumber/cucumber";
const Cucumber = require("@cucumber/cucumber");
also
import Cucumber from "@cucumber/cucumber";
const chai = require("chai/chai");
let setWorldConstructor = Cucumber.setWorldConstructor;
let Given = Cucumber.Given;
let When = Cucumber.When;
let Then = Cucumber.Then;
let expect = chai.expect;
*/

///// World /////
//
// Call 'setWorldConstructor' with to your custom world (optional)
//

let CustomWorld = function () {
    this.variable = 0;
};

CustomWorld.prototype.setTo = function (number) {
    this.variable = parseInt(number);
};

CustomWorld.prototype.incrementBy = function (number) {
    this.variable += parseInt(number);
};

setWorldConstructor(CustomWorld);

///// Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}', function (int) {
    this.setTo(int);
});

When('I increment the variable by {int}', function (int) {
    console.log(">>>>>"+int);
    this.incrementBy(int);
});

Then('the variable should contain {int}', function (int) {
    console.log(this.variable+">>>>>"+int);
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
