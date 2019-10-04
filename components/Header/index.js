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
let headersContainer = document.querySelector(".header-container");

function Header() {
  let headers = document.createElement("div");
  headers.classList.add("header");

  let dates = document.createElement("span");
  dates.classList.add("date");
  dates.textContent = "MARCH 28, 2019";
  let h1s = document.createElement("h1");
  h1s.textContent = "Lambda Times";
  let temps = document.createElement("span");
  temps.classList.add("temp");
  temps.textContent = "98º";

  headers.appendChild(dates);
  headers.appendChild(h1s);
  headers.appendChild(temps);

  return headers;
}

let newHeader = Header();
headersContainer.appendChild(newHeader);
