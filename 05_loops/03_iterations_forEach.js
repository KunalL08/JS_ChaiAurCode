const arr = ['JS', 'Java', 'Ruby', 'Cpp', 'Swift'];

arr.forEach(function (item) {
    // console.log(item);
});

// using call back function
// arr.forEach((item) => { console.log(item) });

// using pre-declared functions

function print(item){
    // console.log(item);
}

arr.forEach(print); // here as function is already declared no need of extra information also no need to add () at end of the function name as we are not execution it here

// values we can access using forEach

arr.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const arrLanguages = [
    {
        name: "Javascript",
        fileExtention: 'js'
    },
    {
        name: "Swift",
        fileExtention: "swift"
    },
    {
        name: "Ruby",
        fileExtention: "rb"
    }
];

arrLanguages.forEach((item) => {
    console.log(item.fileExtention);
});
