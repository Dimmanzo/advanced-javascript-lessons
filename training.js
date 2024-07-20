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
