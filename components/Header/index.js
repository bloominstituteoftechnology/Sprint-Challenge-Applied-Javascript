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
  let headerDiv = document.createElement("div");
  let span = document.createElement("span");
  let header = document.createElement("h1");
  let spanTemp = document.createElement("span");

  headerDiv.append(span, header, spanTemp);

  span.textContent = "SMARCH 28, 2019";
  header.textContent = "Lambda Times";
  spanTemp.textContent = "98°";

  headerDiv.classList.add("header");
  span.classList.add("date");
  spanTemp.classList.add("temp");

  return headerDiv;
}

let head = document.querySelector('.header-container')

head.append(Header())