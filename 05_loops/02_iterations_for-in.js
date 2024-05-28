const myObj = {
    js : 'Javascript',
    py : 'python',
    java : 'Java',
    rb : 'ruby'
}

for (const key in myObj) {
    // console.log(key);  // to get keys from object
    // console.log(myObj[key]) // to get values from object
    // console.log(`${key} : ${myObj[key]}`);
}

const programming = ['js', 'java', 'ruby', 'swift'];

for (const key in programming) {
    // console.log(key); // prints 0,1,2,3 as these are keys for values present in programming array
    // console.log(programming[key]); // prints the value of the array
}

// In JS keys of the values present in array are the array index on which that value is present

const map1 = new Map();

map1.set('In', 'India');
map1.set('USA', 'United States of America');
map1.set('UK', 'Britan');

for(const key in map1){
    console.log(key); // we dont get any output with this as map is not iteratable using for-in
}