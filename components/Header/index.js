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
headerContainer.appendChild(Header());

function Header() {
  const newHeader = document.createElement("div"),
    newDate = document.createElement("span"),
    newH1 = document.createElement("h1"),
    newTemp = document.createElement("span");

  newHeader.appendChild(newDate);
  newHeader.appendChild(newH1);
  newHeader.appendChild(newTemp);

  newDate.textContent = "Smarch 28 2019";
  newH1.textContent = "Lambda Times";
  newTemp.textContent = "98°";

  newHeader.classList.add("header");
  newHeader.classList.add("date");
  newDate.classList.add("temp");

  return newHeader;
}
