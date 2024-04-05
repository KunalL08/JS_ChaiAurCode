// nested objects 

const obj1 = {
    id : 1,
    email : 'some@email.com',
    obj2 : {
        fullname : {
            firstName : 'first',
            lastname : 'last'
        }
    }
}

// console.log(obj1.obj2.fullname.lastname);

// merge two objects into single object

// const objOne = {
//     1 : 'a',
//     2 : 'b'
// }

// const objTwo = {
//     1 : 'a',
//     2 : 'b'
// }

// // there are two ways to merge two objects 

// objThree = Object.assign({}, objOne,objTwo); // using Object.assign() we pass {} as target in which we want to convert multiple objects to and using objOne and objTwo sources 
// console.log(objThree);

// objFour = {...objOne, ...objTwo}; // using the spread operator we can merge the objects same as Object.assign()
// console.log(objFour);

const objFive ={ 
    id : 7,
    name : 'Mahi',
    bat : 'Spartan',
    team : 'CSK',
    role : 'WK-Bat'
};

// console.log(Object.keys(objFive)); // Object.keys will return all keys of objFive in one single array.
// [ 'id', 'name', 'bat', 'team', 'role' ]
// We can apply loops or other array methods to this array

// console.log(Object.values(objFive)); // It will return the all the objFive values in array format

// console.log(Object.entries(objFive)); // it will return array as 
// [
//     [ 'id', 7 ],
//     [ 'name', 'Mahi' ],
//     [ 'bat', 'Spartan' ],
//     [ 'team', 'CSK' ],
//     [ 'role', 'WK-Bat' ]
//   ] converting keys and values into separate array elements for every key value pair

// console.log(objFive.hasOwnProperty('bat')); // returns the boolean value based on property availability

// Object destructiong.

const objSix = {
    id : 1,
    courseName : 'Cricket'
}
// rather than always access the name using objSix.courseName we do object destructuring

const { courseName : cName } = objSix;

console.log(cName);