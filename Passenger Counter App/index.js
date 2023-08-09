let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let peopleEntry = 0;

function increment() {
  peopleEntry += 1;
  countEL.textContent = peopleEntry;
}

function save() {
  let countStr = peopleEntry + " - ";
  saveEl.textContent += countStr;
  peopleEntry = 0;
  countEL.textContent = peopleEntry;
}

console.log("Let's count people on the subway!");
