const numbers = [1,2,3,4,5,6,7,8,9,10];

const addedNumbers = numbers.map((nums) => { return nums + 10; });
console.log(addedNumbers);

const chainedArray = numbers.map((nums) => nums * 10)
                            .map((nums) => nums + 2)
                            .filter((nums) => nums >= 60);
console.log(chainedArray);