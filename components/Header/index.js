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

//=========================================================

//create function

function Header() {
  //create elements

  const divHeader = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temperature = document.createElement("span");

  //add classes

  divHeader.classList.add(".header");
  date.classList.add(".date");
  temperature.classList.add(".temp");

  //add text content

  date.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  temperature.textContent = "98°";

  //append children
  divHeader.appendChild(date);
  divHeader.appendChild(title);
  divHeader.appendChild(temperature);

  return divHeader;
}

//append to document
const header = document.querySelector(".header-container");
header.appendChild(Header());
