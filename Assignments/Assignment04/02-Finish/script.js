// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

const min = (number1, number2) => {
  if (number1 <= number2) {
    return number1;
  }
  return number2;
};

// 2. Write a function that takes the radius of a circle and outputs its approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

const calculateCircumference = radius => {
  const pi = 3.14;

  return 2 * pi * radius;
};

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

const searchString = (characterToFind, stringToSearch) => {
  let found = 0;
  for (let i = 0; i < stringToSearch.length; i++) {
    if (stringToSearch[i] == characterToFind) {
      found++;
    }
  }
  return found;
};
