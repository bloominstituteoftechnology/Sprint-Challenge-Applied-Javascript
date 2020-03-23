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
  // create elements
  const header = document.createElement("div");
  const day = document.createElement("span");
  const h1 = document.createElement("h1");
  const temp = document.createElement("span");

  // create structure
  header.appendChild(day);
  header.appendChild(h1);
  header.appendChild(temp);

  // add styles
  header.classList.add("header");
  day.classList.add("date");
  temp.classList.add("temp");

  // add innerHtml
  day.innerHTML = "MARCH 28, 2019";
  h1.innerHTML = "Lambda Times";
  temp.innerHTML = "98°";

  return header;
}
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
