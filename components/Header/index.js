// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entryPointHeader = document.querySelector(".header-container");

function headerComp() {
  const headerDiv = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temperature = document.createElement("span");

  headerDiv.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  date.textContent = "March 28, 2019";
  title.textContent = "Lambda Times";
  temperature.textContent = "98deg";

  headerDiv.appendChild(date);
  headerDiv.appendChild(title);
  headerDiv.appendChild(temperature);

  entryPointHeader.prepend(headerDiv);

  return headerDiv;
}
headerComp();
