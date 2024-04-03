// object literals

const mySymbol = Symbol('key1');

const obj1 = {
    name : 'hitesh',
    email : 'hitesh@google.com',
    id : 1,
    'newName': 'hiteshNew', //key declared explicitly in the string format
    [mySymbol] : 'myKey1' // symbol declaration in object we compulsory need to use [] for key of the symbol to keep its type as symbol else it will be string
};

//accessing object elements

// console.log(obj1.name); // way 1
// console.log(obj1['name']); // way 2
// console.log(obj1['newName']); // when key is declared in '' we can access that using . operator
// console.log(obj1[mySymbol]); // we access symbols without '' in [] unlike strings

// Freezing the values in object
// Object.freeze(obj1);
// obj1.id = 5; // this will not execute as obj1 is freezed
// console.log(obj1);

// using functions in objects

// obj1.greetings = function(){
//     console.log("Hello obj1");
// }

// console.log(obj1.greetings); // this will not give us proper function and will only give refernece to function
// console.log(obj1.greetings()); // this will print console inside the greetings method.

// obj1.greetingsTwo = function() {
//     console.log(`Hello obj user, ${this.name}`); // When we are writing anything inside objects function we can access the keys of object using this.keyName.
// }

// console.log(obj1.greetingsTwo());