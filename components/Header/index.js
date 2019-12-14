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

function header() {
  // structure of header
  const div = document.createElement("div");
  const span1 = document.createElement("span");
  const h1 = document.createElement("h1");
  const span2 = document.createElement("span");
  // header classes
  div.classList.add("header");
  span1.classList.add("date");
  span2.classList.add("temp");
  // text
  span1.textContent = "SMARCH 28, 2019";
  h1.textContent = "Lambda Times";
  span2.textContent = "98°";
  // adding to DOM
  const container = document.querySelector(".header-container");
  container.appendChild(div);
  div.appendChild(date);
  div.appendChild(h1);
  div.appendChild(temp);

  return header;
}
