function receivesAFunction(exercise) {
    // Call the callback function
    exercise();
}

function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
        console.log("This is a named function");
    }
    // Return the named function
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function");
    };
}

// Test the functions
receivesAFunction(function() {
    console.log("Callback function called");
});

const namedFunc = returnsANamedFunction();
namedFunc();

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();