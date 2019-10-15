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

function Header(text, tempStr) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = text;
  newDiv.appendChild(dateSpan);

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  newDiv.appendChild(h1);

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = tempStr;
  newDiv.appendChild(tempSpan);

  const container = document.querySelector(".header-container");
  container.appendChild(newDiv);
}

Header("OCTOBER 13, 2019", "98°");
