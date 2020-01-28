// Lecture #05 - Expressions, statements, and variables

// Assigning strings, Booleans, and numbers to variables.
let myGreeting = "Hello World!";

let myBoolean = true;

let myNumber = 24;

// let variablePi = 3.14;

// A constant variable assignment.

const constantPi = 3.14;

myGreeting = "Salutations World!";

// What happens when you try to override it?
// This doesn't work!!!:
// constantPi = 10;

// Calling console.log() and Math.min(), Math.max() with variables.
console.log(myGreeting); // "Hello World!"

console.log(Math.min(constantPi, 2)); // 2

// Assigning a variable to a statement.
let myMaximumNumber = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9); // 9

console.log(myMaximumNumber);
