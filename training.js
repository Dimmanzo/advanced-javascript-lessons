// Vanilla JavaScript Function
// function addTwoNumbers(num1, num2) {
//     // Code block
//     return num1 + num2;
// }
// let sum = addTwoNumbers(5, 8);
// console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers = (num1, num2) => {
    // Code block
    return num1 + num2;
}
let sum = addTwoNumbers(5, 8);
console.log(sum)


// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (num1, num2) => (num1 + num2); also valid
const addTwoNumbers2 = (num1, num2) => num1 + num2;
let sum2 = addTwoNumbers2(43, 23);
console.log(sum2)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hey!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
  </p >`
)
console.log(returnMultipleLines());


// ------------------------------------------- Spread //


// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log(arr2)
console.log(arr1)

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log(arr3)
console.log(arr4)

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5 };
console.log(obj1)
console.log(obj2)
console.log(obj3)

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5)


// ------------------------------------------- Spread //


// Regular function call 
const sumALL = (a, b, c) => a + b + c;
let sum = sumALL(2, 2, 2);
console.log("sum", sum);

// Extra arguments are ignored
let sum2 = sumALL(1, 2, 3, 4, 5, 6);
console.log("sum2", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum3", sum3)


// ------------------------------------------- Destructuring //


// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(...others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);