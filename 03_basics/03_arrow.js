const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username} welcome to website`);
        console.log(this); //this prints current context means current values of the user object
    }
}

user.welcomeMessage(); 

user.username = 'Sam'; //here we changes the context of the user object (change the value of the variable)
user.welcomeMessage();

console.log(this); // this will print the blank value cause for complete file there is no context for 'this' but 'this' inside the user object has context

// Does this context works in the function?

function chai() {
    let username = 'Hitesh';
    console.log(this.username); // this will not print or we will get log as undefined as this does not work with functions values
}


// Arrow functions 
// declaration const var_name = (parameters) => {}

//explicit return 

const add = (num1, num2) => {
    return num1 + num2;
}

//implicit return

const newAdd = (num1, num2) => (num1 + num2); // if we use () after => then no need to write 'return' keyword

console.log(add(2,3));
console.log(newAdd(2,4));

// returning object in inplicit return of arrow function

const objReturn = () => ({username : "hitesh"}); //here to return this object we need to add () before and after {}.

console.log(objReturn());

