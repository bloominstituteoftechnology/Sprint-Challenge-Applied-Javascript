// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const div = document.createElement("div");
  div.classList.add("header");
  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = "SMARCH 28, 2019";
  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  const span1 = document.createElement("span");
  span1.classList.add("temp");
  span1.textContent = "98°";

  return header;
}

let container = document.querySelector(".header-container");

container.appendChild();
