//for-of loop
// this is array specific loop

const arr = [1,2,3,4,5];

for( const ar of arr){
    // console.log(ar); // prints each character from array
}

const greeting = 'Hello World';

for(const greet of greeting){
    // console.log(greet); // prints each character from string
}

const map1 = new Map();

map1.set('In', 'India');
map1.set('USA', 'United States of America');
map1.set('UK', 'Britan');

for(const key of map1){
    // console.log(key); // prints every key value pair in form of array e.g [ 'In', 'India' ]
}
// if we dont want it in form of array we can print as independent values

for(const [key, value] of map1){
    // console.log(key, ':', value);  // this will print every key and value independently e.g. In : India
}

// for-of loop on objects

const myobj1 = {
    game1 : 'NFS',
    game2 : 'Cricket07',
    game3 : 'Roadrash',
    game4 : 'Goldmine'
}


for(const obj of myobj1){
    console.log(obj); // we get error as TypeError: myobj1 is not iterable
}


