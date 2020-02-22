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
  const header = document.createElement("div");
  header.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");

  const heading = document.createElement("h1");
  heading.textContent = "Lambda Times";

  const temperature = document.createElement("span");
  temperature.classList.add("temp");
  temperature.textContent = "98°";

  var today = new Date();
  var timeFormat = { month: "long", day: "numeric", year: "numeric" };
  date.textContent = today
    .toLocaleDateString("en-US", timeFormat)
    .toUpperCase();

  //creating  structure of the website contents

  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temperature);

  return header;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
