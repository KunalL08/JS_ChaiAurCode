const arr = ['JS', 'Java', 'Ruby', 'Cpp', 'Swift'];

const elemnets = arr.forEach((item) => {
    // console.log(item)
});

// console.log(elemnets); // we get undefined with this execution

const elemnets1 = arr.forEach((item) => {
    return item;
});

// console.log(elemnets1); // we get undefined with this execution as well
// this is due to forEach doesnot return any value

const numbers = [1,2,3,4,5,6];

let newNums = numbers.filter((nums) => nums > 4); // here we didn't used curly brackets no need to use return value is still stored in newNums variable
// console.log(newNums);

let newNums2 = numbers.filter((nums) => {
    return nums > 4; // here since we used { } curly brackets hence we need to explicitly return values
})
// console.log(newNums2);

const books = [
    {
        name: 'Book one',
        published : 1992,
        genre : 'History',
    },
    {
        name: 'Book two',
        published : 1997,
        genre : 'Econimics',
    },
    {
        name: 'Book three',
        published : 1993,
        genre : 'Social science',
    },
    {
        name: 'Book four',
        published : 2000,
        genre : 'History',
    },
    {
        name: 'Book five',
        published : 2002,
        genre : 'Environment',
    },
    {
        name: 'Book six',
        published : 2004,
        genre : 'Food',
    },
    {
        name: 'Book seven',
        published : 2001,
        genre : 'Design',
    },
    {
        name: 'Book eight',
        published : 1994,
        genre : 'History',
    }
];

const sortedBooks = books.filter((book) => {
    return book.published >= 2000 && book.genre == 'History';
});

console.log(sortedBooks);