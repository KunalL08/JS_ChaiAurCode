// Immediately invoked function expression (IIFE)

//IIFE is used to avoid pollution of global scope that causes late execution of function
//IIFE function is executed as soon as file is called

// syntax : (function declaration)();
//Here first () contains complete function syntax and second () denotes the call of the function in first ()
// ; Semicolon is important to end call of the function and execute next part of the code.

(function code() {
    console.log(`DB connected`);
})();

((user) => {
    console.log(`DB Connected two by ${user}`)
})('Hitesh');

//here user argument is passed in second () brackets and its used in code of first bracket as a variable user