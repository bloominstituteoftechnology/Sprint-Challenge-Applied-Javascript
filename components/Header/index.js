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
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = "SMARCH 28, 2019";
  headerDiv.appendChild(dateSpan);

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  headerDiv.appendChild(h1);

  const tempSpan = document.createElement("span");
  tempSpan.classList.add = "temp";
  tempSpan.textContent = "98°";
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerContainerDiv = document.querySelector(".header-container");

headerContainerDiv.appendChild(Header());
