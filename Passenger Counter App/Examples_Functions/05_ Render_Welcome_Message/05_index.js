// Grab the Welcome-el paragraph and store it in a variable called welcomeEl

// create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcome.El.innerText

let welcomeEl = document.getElementById("welcome-el");

let name = "Persival H. Brulet";
let greeting = "Oi, Hello! My Name is ";

welcomeEl.innerText = greeting + name;

welcomeEl.innerText += " :)";
