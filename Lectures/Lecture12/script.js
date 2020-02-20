// Part 1 - JavaScript's strict mode

// "use strict"; <-- This would turn it on for the entire program

aNumber = 15; // This would throw an error with "use strict" turned on!

const addFifteen = number => {
  "use strict"; // Enabling strict mode just for this function

  let fifteen = 15;
  // fifteen = 15; This would throw an error with "use strict" turned on!

  return number + fifteen;
};

// Strict mode is not on anymore, we left the scope above where we enabled it!
theResult = addFifteen(aNumber);

console.log(theResult);

// Part 2 - Exception Handling

// Creating a new error type called input error
// You can create as many different types of errors as you want for different situations
class InputError extends Error {}

// This is a mock function for prompting for a number, it just generates a random number
// from 0-100
const promptForNumber = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

// This function adds two numbers together if they are both numbers, otherwise it throws
// an InputError with the message "You may only enter numbers!"
const addNumbers = (first, second) => {
  // If either first or second is not a number, throw an InputError
  if (isNaN(first) || isNaN(second)) {
    throw new InputError("You may only enter numbers!");
  }
  // ...otherwise execution continues and the result is returned
  return first + second;
};

// This is an infinite loop that keeps trying to do something until the loop is broken
while (true) {
  // Prompt for 2 numbers (simulated user inputs)
  let first = promptForNumber();
  let second = promptForNumber();

  // Uncomment these lines to see what happens when the code receives bad input
  //   let first = "This is definitely not a number";
  //   let second = null;

  // Enter a try block - we are going to run code that might throw an error
  try {
    let result = addNumbers(first, second);
    // If the above code doesn't return an error, these next two lines run
    console.log(result); // Output the result
    break; // Break out of the infinite loop
  } catch (error) {
    // If an error occurs, catch it here
    // Check to see if the error is an InputError (the error type that we defined)
    if (error instanceof InputError) {
      // If it is, output the custom message we passed to it inside of addNumbers
      console.log(error.message);
    } else {
      // Otherwise, just output a generic error (I don't know what kind of error this
      // is)
      console.log("A generic error occurred");
    }
  }
}
