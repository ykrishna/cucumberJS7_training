// Cucumber and chai have been loaded
// World is global object which has everything from start to end, it only die when cucumber
// execution is completed and come back to node
const Cucumber = require("@cucumber/cucumber");
const chai = require("chai/chai");
let setWorldConstructor = Cucumber.setWorldConstructor;
let Given = Cucumber.Given;
let When = Cucumber.When;
let Then = Cucumber.Then;
let expect = chai.expect;

///// World /////
//
// Call 'setWorldConstructor' with to your custom world (optional)
//
let CustomWorld = function(options) {
    console.log(options.parameters);
    this.variable = 0;
    for(var key in options.parameters) {
        this[key] = options.parameters[key]
    }
    console.log(this.a);
    console.log(this.b);
};

console.log(this.a);

CustomWorld.prototype.setTo = function(number) {
    this.variable = parseInt(number);
};

CustomWorld.prototype.incrementBy = function(number) {
    this.variable += parseInt(number);
};

setWorldConstructor(CustomWorld);

///// Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}', function(number) {
    this.setTo(number);
});

When('I increment the variable by {int}', function(number) {
    this.incrementBy(number);
});

Then('the variable should contain {int}', function(number) {
    expect(this.variable).to.eql(number);
});
