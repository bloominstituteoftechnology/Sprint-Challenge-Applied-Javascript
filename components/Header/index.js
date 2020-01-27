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

function Header(data) {
  // elements
  const newHeader = document.createElement("div");
  const newDate = document.createElement("span");
  const newTitle = document.createElement("h1");
  const newTemp = document.createElement("span");

  // classes
  newHeader.classList.add("header");
  newDate.classList.add("date");
  newTemp.classList.add("temp");

  // add structure
  newHeader.appendChild(newDate);
  newHeader.appendChild(newTitle);
  newHeader.appendChild(newTemp);

  // add content
  newDate.textContent = "SMARCH 28, 2019";
  newTitle.textContent = "Lambda Times";
  newTemp.textContent = "98°";

  return newHeader;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
