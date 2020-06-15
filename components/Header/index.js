// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // creating the variables for this component
  const div = document.createElement("div");
  const span = document.createElement("span");
  const h1 = document.createElement("h1");
  const span2 = document.createElement("span");

  // giving them classes
  div.classList.add("header");
  span.classList.add("date");
  span2.classList.add("temp");

  //passing in data
  span.textContent = "Smarch 28, 2019";
  h1.textContent = "Lambda Times";
  span2.textContent = "98°";

  //appending them
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(span2);

  return div;
}

const headerContainer = document.querySelector("div.header-container");

headerContainer.appendChild(Header());
