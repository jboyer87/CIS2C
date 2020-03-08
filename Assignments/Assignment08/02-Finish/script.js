// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

let form = document.getElementById("preferences-form");
let greeting = document.getElementById("greeting");
let nameInput = document.getElementById("name");
let backgroundColorInput = document.getElementById("background-color");
let foregroundColorInput = document.getElementById("foreground-color");

form.addEventListener("submit", event => {
  event.preventDefault();
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("background-color", backgroundColorInput.value);
  localStorage.setItem("foreground-color", foregroundColorInput.value);
  alert("Preferences saved!");
  applyPreferences();
});

const applyPreferences = () => {
  if (
    localStorage.getItem("name") == null ||
    localStorage.getItem("name") == ""
  ) {
    console.log("Name isn't set yet, sending generic greeting...");
  } else {
    greeting.innerText = "Hello " + localStorage.getItem("name") + "!";
  }
  if (localStorage.getItem("background-color") == null) {
    console.log("Background color isn't set yet, leaving default...");
  } else {
    document.body.style.backgroundColor = localStorage.getItem(
      "background-color"
    );
  }
  if (localStorage.getItem("foreground-color") == null) {
    console.log("Foreground color isn't set yet, leaving default...");
  } else {
    document.body.style.color = localStorage.getItem("foreground-color");
  }
};

applyPreferences();
