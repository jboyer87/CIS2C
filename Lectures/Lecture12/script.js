// "use strict"; <-- This would turn it on for the entire program

aNumber = 15;

const addFifteen = number => {
  "use strict";

  let fifteen = 15;

  return number + fifteen;
};

theResult = addFifteen(aNumber);

console.log(theResult);

// Exception Handling

// creating a new error type called input error
class InputError extends Error {}

// mock function for prompting for a number, generates a random number
const promptForNumber = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

// adds two numbers together if they are both numbers
const addNumbers = (first, second) => {
  if (isNaN(first) || isNaN(second)) {
    throw new InputError("You may only enter numbers!");
  }
  return first + second;
};

while (true) {
  let first = promptForNumber();
  let second = promptForNumber();

  //   let first = "This is definitely not a number";
  //   let second = null;

  try {
    let result = addNumbers(first, second);
    console.log(result);
    break;
  } catch (error) {
    if (error instanceof InputError) {
      console.log(error.message);
    } else {
      console.log("A generic error occurred");
    }
  }
}
