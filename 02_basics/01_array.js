// declaration 

let newArray = [1,2,3,4,5];
let newArray2 = new Array(1,2,3,4,5);

// we have various methods in array's
// newArray2.push(2); // pushes 2 in the last
// newArray2.pop(); //pops out last element
// newArray2.unshift(9); //adds the 9 to start of array shifts arrray elements furthur
// newArray2.shift(); //pops the first element from the array
// console.log(newArray2.indexOf(3)); //gives index of the element
// console.log(newArray2.includes(2)); // boolean response based on availability of element in the array

// let updatedArray = newArray2.join(9); // converts the array to string using provided separator
// console.log(typeof updatedArray, updatedArray);

// slice and splice

// let originalArray = [0, 1, 2, 3, 4, 5];

// console.log("A", originalArray);

// let sliceArray = originalArray.slice(1,3);
// console.log("Slice op", sliceArray);

// console.log("B", originalArray);

// let spliceArray = originalArray.splice(1,3);
// console.log("Splice op", spliceArray);

// console.log("C", originalArray);

// difference between slice and splice
// In slice if we give start 1 and end 3 then it gives output as [1, 2] and original array is not modified
// In splice if we give start 1 and deleteCount as 3 then output is [1,2,3] and original array is modified to [0,4,5] that is elements excluding splice array.
