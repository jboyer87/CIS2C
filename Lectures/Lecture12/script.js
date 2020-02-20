// "use strict"; <-- This would turn it on for the entire program

aNumber = 15;

const addFifteen = number => {
  "use strict";

  let fifteen = 15;

  return number + fifteen;
};

theResult = addFifteen(aNumber);

console.log(theResult);
