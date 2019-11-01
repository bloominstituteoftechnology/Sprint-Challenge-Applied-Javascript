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
const headerContainer = document.querySelector(".header-container");

function Header(Header) {
  const newHeader = document.createElement("div"),
    newDate = document.createElement("span"),
    newH1 = document.createElement("h1"),
    newTemp = document.createElement("span");

  newHeader.appendChild(newDate);
  newDate.appendChild(newH1);
  newDate.appendChild(newTemp);

  newHeader.classList.add("header");
  newHeader.classList.add("date");
  newDate.classList.add("temp");

  return Header;
}
