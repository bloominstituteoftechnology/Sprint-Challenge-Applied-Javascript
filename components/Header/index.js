// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, h1, temp) {
const headerdiv = document.createElement("div");
const spand = document.createElement("span");
const h1tag = document.createElement("h1");
const spant = document.createElement("span");

headerdiv.appendChild(spand);
headerdiv.appendChild(h1tag);
headerdiv.appendChild(spant);

headerdiv.classList.add("headerdiv");
headerdiv.classList.add("spand");
headerdiv.classList.add("spant");

spand.textContent = date;
h1tag.textContent = h1;
spant.textContent = temp;

return headerdiv;
}
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());