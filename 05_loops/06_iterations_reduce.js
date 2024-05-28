const myNums = [1,2,3,4,5];

const initialValue = 1;

const myTotal = myNums.reduce(
    (accumulator, currentValue) => {
        console.log(`${accumulator} : ${currentValue}`);
        return accumulator + currentValue;
    }, initialValue);

console.log(myTotal);

const cartItems = [
    {
        courseName : 'CPP',
        price : 499
    },
    {
        courseName : 'Java',
        price : 699
    },
    {
        courseName : 'Logic',
        price : 999
    },
    {
        courseName : 'Algorithm',
        price : 1499
    },
    {
        courseName : 'Algoritm + Logic',
        price : 2499
    }
];

cartValue = cartItems.reduce((accumulator, item) => {
    return item.price + accumulator;
}, 0);

console.log(cartValue);

// In reduce methods callback method we need one accumulator & current value in array. We assign initial value that will be used in place of
// accumulator for first iteration and then every calculated value is used as accumulator with current value in array.