const {seleniumWebdriver, until} = require("selenium-webdriver");
const {setWorldConstructor, World} = require("@cucumber/cucumber");

///// World /////
// World is global object which has everything from start to end, it only die when cucumber
// execution is completed and come back to node
// all elements and functions defined here are handover to cucumber with help of world, so it has a global context
// will be available to step definitions and hooks

class CustomWorld extends World {
    variable = 0;
    context = "";
    driver;
    title='';

    constructor(options) {
        super(options);
    }

    setToTitle(x){
    this.title = x;
    };

    setTo = function (number) {
        this.variable = parseInt(number);
    };

    incrementBy = function (number) {
        this.variable += parseInt(number);
    };

    isWorld = function () {
        return true
    }
}

setWorldConstructor(CustomWorld);