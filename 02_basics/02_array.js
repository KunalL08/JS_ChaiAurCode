let marvel_heros = ['hulk','capt_USA','ironman'];
let dc_heros = ['spiderman', 'flash'];

// marvel_heros.push(dc_heros); // this  gives output as [ 'hulk', 'capt_USA', 'ironman', [ 'spiderman', 'flash' ] ]
// console.log(marvel_heros);

// const concatArray = marvel_heros.concat(dc_heros); // combines two or more array's gives output as [ 'hulk', 'capt_USA', 'ironman', 'spiderman', 'flash' ]
// console.log(concatArray);

// Same as concat we can get combined array output using spread operator

// const spreadOperatorArray = [...marvel_heros, ...dc_heros]; // combines two or more array's gives output as [ 'hulk', 'capt_USA', 'ironman', 'spiderman', 'flash' ]
// console.log(spreadOperatorArray);

// Getting data into single array when there are multiple array's inside array

// const multipleArray = [1,2,4, [5, 6], 7, [9, 10, [11, 14], 15]]; // this combines all the array inside array in to one single array.
// console.log(multipleArray.flat(Infinity));

// isArray, from, of methods

// console.log(Array.isArray("Code")); // gives us boolean result based on passed value here it will give false for "Code" as its string value
// console.log(Array.from("Hitesh")); // we will get String "Hitesh" converted to array as [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({id : 1})); // returns the empty array as we need to give either key or value to convert it to array
// console.log(Array.of("Hitesh", "Code")); // we will get the array from string as complete string in array [ 'Hitesh', 'Code' ]