// In JS does every thing considered as Object? => YES
// Array, String, Functions => Are all eventually Objects.

// e.g. for below function

function newFunction(num){
    return num*5;
}

// to above function we can also access using property

newFunction.power = 2;

console.log(newFunction(5));            // Output : 25
console.log(newFunction.power);         // Output : 2       // Hence we can access function as the object
console.log(newFunction.prototype);     // Output : {}      // Here as well we got prototype {} for function.prototype

// Hence all the elements in JS are Objects




// significance of 'new' & 'this' keyword

// Can we create our own methods for methods that we written ?

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment =  function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}

// const chai = createUser('chai', 25);

// const code = createUser('code', 250);

// chai.printMe();     // Output is : TypeError: Cannot read properties of undefined (reading 'printMe')
// Above error is due to the context of the createUser is not set in the code
// To resolve this we need to use the 'new' keyword to let know the code that we have created new functions inside createUser()


const chai1 = new createUser('chai1', 25);
const code2 = new createUser('code1', 250);

chai1.printMe();

// New even if we console the createUser.prototype then we can see that both 'increment' & 'printMe' is created

console.log(createUser.prototype);      // Output: { increment: [Function (anonymous)], printMe: [Function (anonymous)] }

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/