const isGenerator = require('is-generator');
const {coroutine} = require ('bluebird');
const {setDefinitionFunctionWrapper} = require ('@cucumber/cucumber');
setDefinitionFunctionWrapper(function (fn) {
    if (isGenerator.fn(fn)) {
        return coroutine(fn)
    } else {
        return fn
    }
})
