// Adding Event Handlers

function buttonClickHandler() {
  alert("BOOM! IT EXPLODED! I TOLD YOU NOT TO CLICK IT!");
  console.log("BOOM!");
  // Remove the event listener so that it only fires one time
  button.removeEventListener("click", buttonClickHandler);
}

// A function that can re-enable the button click handler that we removed above
function reenableButtonClick() {
  button.addEventListener("click", buttonClickHandler);
}

// A function that disables the default action of an element
function disableLink(event) {
  event.preventDefault();
  alert("You're not going anywhere!");
}

// Refers to the first button that is found on the page
let button = document.querySelector("button");

// Refers to the first h1 that is found on the page
let h1 = document.querySelector("h1");

// Refers to the element that has an id of nav-link-1 on the page
const navlink1 = document.getElementById("nav-link-1");

// Refers to all elements that have the nav-link-generic class on the page
const genericNavLinks = document.getElementsByClassName("nav-link-generic");

// CANNOT remove event listeners that were added this way with an anonymous arrow function
// button.addEventListener("click", () => {
//   alert("BOOM! IT EXPLODED! I TOLD YOU NOT TO CLICK IT!");
//   console.log("BOOM!");
// });

// Add an event listener to the button that calls buttonClickHandler handler
button.addEventListener("click", buttonClickHandler);

// Adds an event handler to the h1 that calls the reenableButtonClick handler
h1.addEventListener("click", reenableButtonClick);

// Adds an event handler to the nav-link-1 element that calls the disableLink handler
navlink1.addEventListener("click", event => disableLink(event));

// Iterates through a list of elements that are stored in the genericNavLinks binding
for (let i = 0; i < genericNavLinks.length; i++) {
  genericNavLinks[i].addEventListener("click", event => disableLink(event));
}

// HANDLING USER INPUT

// Sets an event listener on the WINDOW that listens for mousedown events and calls the
// mouseDownListener
window.addEventListener("mousedown", event => mouseDownListener(event));

// Checks to see which button was clicked and outputs a message based on which button
// was detected
function mouseDownListener(event) {
  if (event.button == "0") {
    console.log("You left-clicked!");
  } else if (event.button == "1") {
    console.log("You middle-clicked!");
  } else if (event.button == "2") {
    console.log("You right-clicked!");
  }
}

// Sets an event listener on the WINDOW that listens for keydown events and calls the
// keyDownListener
window.addEventListener("keydown", event => keyDownListener(event));

// Checks to see which key was pressed and outputs a message based on which key was
// detected
function keyDownListener(event) {
  if (event.key == "a" || event.key == "A") {
    console.log("You pressed the 'a' or 'A' key!");
  } else if (event.key == "b") {
    console.log("You pressed the 'b' key!");
  } else {
    console.log("You pressed some other key!");
  }
}
