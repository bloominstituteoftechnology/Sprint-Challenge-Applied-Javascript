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

// get the div header-container inside the html

// my code .
function Header() {
  // define the new ELemnts
  const headerDiv = document.createElement("div");
  const spanDate = document.createElement("span");
  const heading = document.createElement("h1");
  const spanTemp = document.createElement("span");

  // put content
  spanDate.textContent = "MARCH 28, 2019";
  heading.textContent = "Lambda Times";
  spanTemp.textContent = "98°";

  // add class names to the elemnts (styles).
  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  //put together
  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(heading);
  headerDiv.appendChild(spanTemp);

  return headerDiv;
}
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
