const {After, Before, AfterAll, AfterStep, BeforeStep,Status } = require('@cucumber/cucumber');
const {seleniumWebdriver,Builder} = require("selenium-webdriver");
let driver;

Before(function() {
    if(this.parameters['browser']) {
        this.driver = new Builder().forBrowser('chrome').build();
        driver = this.driver;
    }else{
        throw Error(">>>>enter right Browser name in parameters<<<<<< ");
    }
})

AfterStep(function(result){
    if (result.status === Status.FAILED) {
        this.driver.takeScreenshot();
    }
});

BeforeStep({tags:"@aha"},function(){
return console.log(">>>>>>> this hook will run before the scenario tagged with @aha>>>>>>>>");
});

After(function(){
    // isWorld is a function defined in World file is accessed here
    if (this.isWorld()) {
        this.driver.close();
    }else{
        throw Error("Expected '->this<-' to be world");
    }
})

AfterAll(function() {
    // this keyword wont bring world params or functions
    if (true) {
        driver.quit();
    }else{
        throw Error("Expected '->this<-' to be world");
    }
})