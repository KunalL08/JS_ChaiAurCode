//Date in Javascript

let myDate = new Date();

// console.log(typeof myDate);
// console.log("toString", myDate.toString());
// console.log("toDateString", myDate.toDateString());
// console.log("toLocaleString", myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate);
//Months in Date object starts from 0

// let myCreatedDate1 = new Date(2023, 0, 14, 5, 3);
// console.log(myCreatedDate1);

// let myCreatedDate2 = new Date("2023-01-14");
// console.log(myCreatedDate2);

// let myCreatedDate3 = new Date("01-14-2023");
// console.log(myCreatedDate3);

//we have multiple functions available for Date object such as
// let myCreatedDate4 = new Date("01-14-2023");
// console.log(myCreatedDate4.getDay());
// console.log(myCreatedDate4.getFullYear());
//We can get from year to miliseconds using get Methods


//To get timestamp
// let myNewDate = Date.now()
// this will give value in miliseconds
// console.log(myNewDate);

// to convert above value in seconds we do
// console.log("Date now in seconds",  Math.floor(myNewDate/1000));

// LocaleString method:

let updateDate = new Date();

let newDate = updateDate.toLocaleDateString('default', {
    "timeZone" : "IST",
    "day": "numeric"
});

// Using the LocaleString we can pass multiple options in second parameter to get date as per our expected format
console.log(newDate);