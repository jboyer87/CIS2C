// Working with forms and form fields

// Getting references to form field elements by their ID
let textField = document.getElementById("textField");
let passwordField = document.getElementById("passwordField");
let colorField = document.getElementById("colorField");

// A function that writes out the current values of each form field element to the console
const writeTextFieldContents = event => {
  event.preventDefault(); // Stops from submitting the form

  // .value grabs the current value in a form field element
  // NOTE: VS Code may show an error under value - don't worry about it!
  let textFieldContents = textField.value;
  let passwordFieldContents = passwordField.value;
  let colorFieldContents = colorField.value;

  // Using console.log to show the current value of each of the three form fields
  console.log("The textField value is: " + textFieldContents);
  console.log("The passwordField value is: " + passwordFieldContents);
  console.log("The colorField value is: " + colorFieldContents);
};

// A function that changes the background color based on what is selected in the form
const changeBackgroundColor = event => {
  event.preventDefault(); // Stops from submitting the form

  // Get the contents of the color field
  let colorFieldContents = colorField.value;

  // Get a reference to the body element (basically the whole page!)
  let body = document.querySelector("body");

  // Change the background color of the body to the value currently selected in the field
  body.style.backgroundColor = colorFieldContents;
};

// Gets a reference to the form
let myForm = document.getElementById("myForm");

// Add two separate event listeners when the form is submitted
// This allows us to add our own functionality instead of submitting the form
myForm.addEventListener("submit", writeTextFieldContents);
myForm.addEventListener("submit", changeBackgroundColor);

// Working with session/local storage

// A function that says "hello" to the person whose name is currently entered in the text
// field
const sayHello = () => {
  // Get the value in the text field
  let textFieldContents = textField.value;

  // Store it in the local storage
  // "myName" is the key and textFieldContents is the value
  localStorage.setItem("myName", textFieldContents);

  // We could store it in session storage too:
  // sessionStorage.setItem("myName", textFieldContents);

  // Get the value we just stored in local storage
  let myName = localStorage.getItem("myName");

  // Pop up an alert that says hello!
  alert("Hello " + myName);
};

// Add a third event listener that says hello when the form is submitted
myForm.addEventListener("submit", sayHello);
