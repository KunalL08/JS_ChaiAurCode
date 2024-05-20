userEmail = "hites@emai.com";

userEmail1 = "";

if(userEmail){
    console.log("user has email"); //printed
}
else{
    console.log("user email missing");
}

if(userEmail1){ 
    console.log("user has email");
}
else{
    console.log("user email missing");  //printed
}

// In above 2 examples userEmail is truthy value and userEmail1 is falsy value since its empty string.


// Falsy values :
//  false, 0(zero), -0(negative zero), BigInt 0n, ""(empty string), null, undefined, NaN

// Truthy values :
// "0" (zero on string), 'false' (false in string), " " (string having whitespace), [] (empty array), {} (empty object), function() {} (empty function)

// How to check array & object are empty

// array
const arr1 =[];

if(arr1.length === 0){
    console.log("Array is empty");
}

// Object
const obj1 = {};

if(Object.keys(obj1).length === 0){  //  here Object.keys returns array of keys in the object obj1 hence we can use .length on that.
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;   // here it will simply assign first value 5
val1 = null ?? 10;    // here it will assign value as 10 instead of null
val1 = undefined ?? 15;    // here it will assign value as 15
val1 = null ?? 10 ?? 20;  // here it will give value as 10 as its first proper value
console.log(val1);

// null coalescing operator used to avoid error scenario in case of getting null or undefined value
