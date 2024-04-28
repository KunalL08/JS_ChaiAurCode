let a = 300;

if(true){
    let a = 30;
    console.log("Inner", a);
}

console.log("Outer", a);


// function inside function and variable scope

function one(){
    const user = 'hitesh';

    function two() {
        const website = 'Youtube';
        console.log(user);
    }

    //console.log(website); //we got error here as its declared inside scope of two().

    two();
}

one();

// function declaration scenario's

newOne(); // no issue even if I call function before declaring it. It will still execute

function newOne(value) {
    return value + 1;
}

// newTwo(); // we get error here "Cannot access newTwo before initialization" as we call the variable method before declaration

const newTwo = function(value){
    return value + 2;
}