1//Function declarion

// function myName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

//function reference 
// myName

//function execution 
// myName();


// functions with arguments/ parameters:

function userLoggedInMessage(username){
    if(!username){
        return 
    }
    return `${username} logged in few minutes back`;
}

// console.log(userLoggedInMessage("Hitesh"));


//when we dont know the number of possible arguments in the function we can use ... rest/spread operator.
function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

//using object as argument
const user = {
    userName : 'Hitesh',
    marks : 188
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and marks are ${anyObject?.marks}`);
}

handleObject(user);

//Passing array as arguments

function returnSecondValue(arr){
    return arr[1];
}

console.log(returnSecondValue([100, 180, 198, 199]));