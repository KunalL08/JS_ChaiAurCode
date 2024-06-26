// creation of promises:

const promise1 = new Promise(function(resolve, reject){
    // Do async task
    // Do DB task cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

//consumption of promise

promise1.then(function(){
    console.log("Promise consumed");
});




// Passing and using data in promise

const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: 'chai', email: 'example.com'});      // passing data after operations
    }, 1000);
});

promise2.then(function(user){       // retriving data passed above in the resolve(data)
    console.log(user);
});



const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const isError = false;
        if(!isError) {
            resolve({userName: 'ChaiCode', email: 'example.com'});
        }
        else {
            reject('Error occured !');
        }
    })
});

promise4.then((user) => {
    return user.userName;
}).then((username) => {     // here we did multi chaining & its possible here
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise either resolved or rejected");
})




const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const isError = true;
        if(!isError) {
            resolve({userName: 'ChaiCode', email: 'example.com'});
        }
        else {
            reject('Error occured !');
        }
    })
});

// we have written this below code using async await
// now if isError is true then promise5 will throw error and async & await will not handle this error case

// async function consumePromiseFive(){
//     const response = await promise5;
//     console.log("Response", response);
    
// }

// below code we write using try-catch block
// this will handle the case of error in case of isError is true

async function consumePromiseFive(){
    try {
        const response = await promise5;
        console.log(response); 
    }
    catch(error) {
        console.log(error);
    }
}

consumePromiseFive();


// Fetch method is JS.
// below method executes first comapred to other low priority codes or setTimeouts etc functions as fetch always has high priority in the JS code
// fetch creates its own 'priority queue' or 'Micro task queue' which has priority over call backs or methods
// Refer video https://www.youtube.com/watch?v=Rive84an6Lc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=41


fetch('https://jsonplaceholder.typicode.com/users').
then((response) => {
    return response.json();
}).
then((data) => {
    console.log(data);
}).
catch((e) => {
    console.log(e);
});