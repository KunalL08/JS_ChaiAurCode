//Conversion of different data types into numbers

const a = "33";
const c = "33ab";
const e = null;
const g = undefined;
const i = true;

// console.log(typeof a);
// console.log(typeof c);
// console.log(typeof e);
// console.log(typeof g);
// console.log(typeof i);

// const b = Number(a);

// console.log(typeof b);
// console.log(b);


// const d = Number(c);

// console.log(typeof  d);  // type is number here
// console.log(d);   // here value will be NaN.


// const f = Number(e);

// console.log(typeof f);      // type will be number.
// console.log(f)       // here value will be 0 (zero). Null = 0 upon converting to number.


// const h = Number(g);

// console.log(typeof h);      // type will be number
// console.log(h);      // value will be NaN

// const j= Number(i);

// console.log(typeof j);      // type will be number
// console.log(j);     // value will be 1




// conversion of data types to boolean

// const isNumber = 1;

// const isBooleanFromNumber = Boolean(isNumber);
// console.log(typeof isBooleanFromNumber)             // type - boolean
// console.log(isBooleanFromNumber);                   // value is true


// const isString = "hitesh";

// const isBooleanFromString = Boolean(isString);
// console.log(typeof isBooleanFromString);        // type boolean
// console.log(isBooleanFromString);               // value will be true


// const isBlankString = "";

// const isBooleanFromBlank = Boolean(isBlankString);
// console.log(typeof isBooleanFromString);        // for blank string type will be undefined
// console.log(isBooleanFromBlank);                // value will be false


// const isNumberOtherThan1And0 = 33;

// const isBooleanFromNumberOtherThan1And0 = Boolean(isNumberOtherThan1And0);
// console.log(typeof isBooleanFromNumberOtherThan1And0);      // type will be boolean
// console.log(isBooleanFromNumberOtherThan1And0);             // value will be true


//conversion of data type to String

// const isNumber = 1;

// const isNumberToString = String(isNumber);
// console.log(typeof isNumberToString);       // type string
// console.log(isNumberToString);              // value is "1"


// const isBoolean = true;

// const isBooleanToString = String(isBoolean);
// console.log(typeof isBooleanToString);      // type string
// console.log(isBooleanToString);             // value 'true'


// const isNull = null;

// const isNullToString = String(isNull);
// console.log(typeof isNullToString);            // type string
// console.log(isNullToString);                   // value 'null'


// const isUndefined = undefined;

// const isUndfinedtoString = String(isUndefined);
// console.log(typeof isUndfinedtoString);           // type string
// console.log(isUndfinedtoString);                  // value 'undefined'