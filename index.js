function receivesAFunction(callback) {
    callback();
}
function myCallback() {
    console.log("This is the callback function!");
}
receivesAFunction(myCallback);
function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function!");
    }
    return namedFunction;
}
const myNamedFunction = returnsANamedFunction();
myNamedFunction();
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function!");
    };
}
const myAnonymousfunction = returnsAnAnonymousFunction();
myAnonymousFunction();