// Object literals

const user = {              // this is the object literal the object that we have defined with { }
    username: 'Hitesh',
    id: 203345,

    getUsername: function(){
        console.log(this.username);
    }
}


// Constructor

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = User('Hitesh', 14, true);
const userTwo = User('ChaiAurCode', 11, false);

// console.log(userOne);       // for this log we got output as below

// username: 'ChaiAurCode',     //  Since we have used the same User function for both userOne & userTwo 
// isLoggedIn: false            //  the data in userOne is overwritten by data in userTwo
// loginCount: 11,    

// To avoid above condition we need to use 'new' keyword using User() method

const userThree = new User('chai', 10, true);
const userFour = new User('code', 9, false);

// console.log(userThree);
// console.log(userFour);

//  With use of 'new' keyword new instance is generated
//  Cause new keyword constructor function is called
//  All the arguments and other data are injected to that particular user

console.log(userThree.constructor);     // we get output as [Function: User] for this console.
                                        // .constructor property is reference to itself

