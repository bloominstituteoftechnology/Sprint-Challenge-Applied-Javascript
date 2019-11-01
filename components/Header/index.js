// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">November 01, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerC = document.querySelector(".header-container");

function Header() {
  ///create variables
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");

  ///assign classes
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  ///content
  date.textContent = "November 01, 2019";
  temp.textContent = "37° With a Rain Mix";

  /////Append Elements
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return header;
}

headerC.appendChild(Header());
