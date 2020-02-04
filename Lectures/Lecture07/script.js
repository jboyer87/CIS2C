// 3 different function declaration syntaxes

// 1. Binding or Variable declaration syntax

// 1a. With a let binding

let divide = function(top, bottom) {
  return top / bottom;
};

let result = divide(6, 3);

console.log(result);

// 1b. With a const binding

const outputGreeting = function() {
  return "Hello World!";
};

console.log(outputGreeting());

// 2. Function declaration syntax

console.log(multiply(3, 3));

function multiply(n, m) {
  return n * m;
}

// 3. Arrow (=>) function syntax

const add = (n, m) => {
  return n + m;
};

const square = n => {
  return n * n;
};

console.log(add("Hello ", "World!"));

console.log(square(9));

// Shortcut format for arrow functions

const divideNumbers = (n, m) => n / m;

console.log(divideNumbers(6, 3));
